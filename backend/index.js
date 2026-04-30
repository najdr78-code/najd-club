import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
// Redeployed: 2026-04-30-v5-full-fix

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// ──────────────────────────────────────────────────────────
// HEALTH CHECK
// ──────────────────────────────────────────────────────────
app.get('/health', (req, res) => res.json({ status: 'ok', version: 'v5' }));

// ──────────────────────────────────────────────────────────
// AUTH
// ──────────────────────────────────────────────────────────
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { coachProfile: true, parentProfile: true }
    });
    if (user && user.password === password) {
      const base = { id: user.id, email: user.email, name: user.name, role: user.role.toLowerCase(), phone: user.phone };
      if (user.coachProfile) Object.assign(base, { ...user.coachProfile, role: 'coach' });
      if (user.parentProfile) Object.assign(base, { ...user.parentProfile, role: 'parent' });
      res.json(base);
    } else {
      res.status(401).json({ error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
    }
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// INITIAL DATA (single request for all state)
// ──────────────────────────────────────────────────────────
app.get('/api/initial-data', async (req, res) => {
  try {
    const [groups, coaches, players, payments, attendance, evals, messages, trainings] = await Promise.all([
      prisma.group.findMany(),
      prisma.coach.findMany({ include: { user: true } }),
      prisma.player.findMany(),
      prisma.payment.findMany({ orderBy: { date: 'desc' } }),
      prisma.attendance.findMany({ orderBy: { date: 'desc' } }),
      prisma.evaluation.findMany({ orderBy: { date: 'desc' } }),
      prisma.message.findMany({ orderBy: { date: 'desc' } }),
      prisma.training.findMany()
    ]);

    // Separate player attendance vs coach attendance
    const playerAttendance = attendance.filter(a => !a.coachId || a.records);
    const coachesAttendance = attendance.filter(a => a.coachId);

    res.json({
      groups,
      coaches: coaches.map(c => ({
        id: c.id,
        userId: c.user.id,
        name: c.user.name,
        email: c.user.email,
        password: c.user.password,
        phone: c.user.phone || '',
        specialty: c.specialty || '',
        exp: c.exp || 0,
        cert: c.cert || '',
        salary: c.salary || 0,
        groupId: c.groupId || '',
        perms: c.perms || {},
        role: 'coach'
      })),
      players: players.map(p => ({
        ...p,
        parentId: p.parentId,
        groupId: p.groupId
      })),
      payments,
      attendance: playerAttendance,
      coachesAttendance,
      evals,
      messages,
      trainings
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// GROUPS — Properly handles @unique coachId constraint
// ──────────────────────────────────────────────────────────
app.post('/api/groups', async (req, res) => {
  const g = req.body;
  if (!g || !g.id) return res.status(400).json({ error: 'id required' });
  try {
    if (g.coachId) {
      // Step 1: Clear the target coach's current group assignment (avoid unique conflict)
      await prisma.coach.updateMany({
        where: { groupId: g.id, NOT: { id: g.coachId } },
        data: { groupId: null }
      });
      // Step 2: Also clear any OTHER group that has this coachId
      await prisma.group.updateMany({
        where: { coachId: g.coachId, NOT: { id: g.id } },
        data: { coachId: null }
      });
      // Step 3: Update the new coach to point to this group
      await prisma.coach.updateMany({
        where: { id: g.coachId },
        data: { groupId: g.id }
      });
    } else {
      // Clearing coach from group — also clear groupId from the current coach
      const existing = await prisma.group.findUnique({ where: { id: g.id } });
      if (existing?.coachId) {
        await prisma.coach.updateMany({ where: { id: existing.coachId }, data: { groupId: null } });
      }
    }

    const group = await prisma.group.upsert({
      where: { id: g.id },
      update: { name: g.name, color: g.color || '#06B6D4', coachId: g.coachId || null },
      create: { id: g.id, name: g.name, color: g.color || '#06B6D4', coachId: g.coachId || null }
    });
    res.json(group);
  } catch (e) {
    console.error('Group error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/groups/delete', async (req, res) => {
  const { id } = req.body;
  try {
    // Unlink coach before deleting
    await prisma.coach.updateMany({ where: { groupId: id }, data: { groupId: null } });
    await prisma.group.delete({ where: { id } });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// COACHES
// ──────────────────────────────────────────────────────────
app.post('/api/coaches', async (req, res) => {
  const c = req.body;
  if (!c || !c.email) return res.status(400).json({ error: 'email required' });
  try {
    const user = await prisma.user.upsert({
      where: { email: c.email },
      update: { password: c.password, name: c.name, phone: c.phone || null },
      create: { email: c.email, password: c.password, name: c.name, role: 'COACH', phone: c.phone || null }
    });

    // If groupId is being set, clear it from other coaches FIRST (avoid unique violation)
    if (c.groupId) {
      await prisma.coach.updateMany({
        where: { groupId: c.groupId, NOT: { userId: user.id } },
        data: { groupId: null }
      });
      // Also clear any other group's coachId pointing to this coach
      const existingCoach = await prisma.coach.findUnique({ where: { userId: user.id } });
      if (existingCoach && existingCoach.groupId && existingCoach.groupId !== c.groupId) {
        await prisma.group.updateMany({ where: { id: existingCoach.groupId }, data: { coachId: null } });
      }
    }

    const coach = await prisma.coach.upsert({
      where: { userId: user.id },
      update: {
        specialty: c.specialty || null,
        exp: c.exp ? parseInt(c.exp) : null,
        cert: c.cert || null,
        salary: c.salary ? parseFloat(c.salary) : null,
        groupId: c.groupId || null,
        perms: c.perms || {}
      },
      create: {
        userId: user.id,
        specialty: c.specialty || null,
        exp: c.exp ? parseInt(c.exp) : null,
        cert: c.cert || null,
        salary: c.salary ? parseFloat(c.salary) : null,
        groupId: c.groupId || null,
        perms: c.perms || {}
      }
    });

    // Sync group's coachId
    if (c.groupId) {
      await prisma.group.updateMany({ where: { id: c.groupId }, data: { coachId: coach.id } });
    }

    res.json({ ...coach, id: coach.id, userId: user.id, name: user.name, email: user.email });
  } catch (e) {
    console.error('Coach error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/coaches/delete', async (req, res) => {
  const { id } = req.body;
  try {
    const coach = await prisma.coach.findUnique({ where: { id } });
    if (coach) {
      if (coach.groupId) await prisma.group.updateMany({ where: { id: coach.groupId }, data: { coachId: null } });
      await prisma.coach.delete({ where: { id } });
      if (coach.userId) await prisma.user.delete({ where: { id: coach.userId } }).catch(() => {});
    }
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// PLAYERS
// ──────────────────────────────────────────────────────────
app.post('/api/players', async (req, res) => {
  const p = req.body;
  if (!p) return res.status(400).json({ error: 'body required' });
  try {
    const phone = p.phone || '0500000000';
    const email = p.email || `player_${phone}@najd.sa`;
    const password = p.password || phone.slice(-4);

    // Ensure parent user exists
    let parentUser = await prisma.user.findFirst({ where: { OR: [{ email: email }, { phone: phone }], role: 'PARENT' } });
    if (!parentUser) {
      parentUser = await prisma.user.create({
        data: { email: email, password: password, name: `ولي أمر ${p.name}`, role: 'PARENT', phone: phone }
      });
    } else {
      await prisma.user.update({ where: { id: parentUser.id }, data: { password: password, phone: phone } });
    }

    // Ensure parent profile
    let parent = await prisma.parent.findUnique({ where: { userId: parentUser.id } });
    if (!parent) parent = await prisma.parent.create({ data: { userId: parentUser.id } });

    // Ensure group exists (required)
    if (p.groupId) {
      const groupExists = await prisma.group.findUnique({ where: { id: p.groupId } });
      if (!groupExists) p.groupId = null;
    }

    // Build player data
    const playerData = {
      name: p.name,
      phone: phone,
      age: parseInt(p.age) || 10,
      status: p.status || 'نشط',
      position: p.position || null,
      weight: p.weight ? parseFloat(p.weight) : null,
      height: p.height ? parseFloat(p.height) : null,
      score: parseInt(p.score) || 80,
      speed: parseInt(p.speed) || 75,
      stamina: parseInt(p.stamina) || 75,
      technique: parseInt(p.technique) || 75,
      teamwork: parseInt(p.teamwork) || 75,
      goals: parseInt(p.goals) || 0,
      assists: parseInt(p.assists) || 0,
      attendancePct: parseInt(p.attendancePct) || 90,
      groupId: p.groupId || null,
      parentId: parent.id
    };

    const player = await prisma.player.upsert({
      where: { id: p.id || 'new_player_' + Date.now() },
      update: playerData,
      create: { id: p.id, ...playerData }
    });
    res.json({ ...player, email, password, parentId: parent.id });
  } catch (e) {
    console.error('Player error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/players/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await prisma.evaluation.deleteMany({ where: { playerId: id } });
    await prisma.payment.deleteMany({ where: { playerId: id } });
    await prisma.player.delete({ where: { id } });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// ATTENDANCE (Players + Coaches)
// ──────────────────────────────────────────────────────────
app.post('/api/attendance', async (req, res) => {
  const a = req.body;
  if (!a || !a.id) return res.status(400).json({ error: 'id required' });
  try {
    const att = await prisma.attendance.upsert({
      where: { id: a.id },
      update: { records: a.records, date: a.date ? new Date(a.date) : new Date() },
      create: {
        id: a.id,
        date: a.date ? new Date(a.date) : new Date(),
        groupId: a.groupId,
        coachId: a.coachId || null,
        records: a.records
      }
    });
    res.json(att);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/coaches-attendance', async (req, res) => {
  const a = req.body;
  if (!a || !a.id) return res.status(400).json({ error: 'id required' });
  try {
    const att = await prisma.attendance.upsert({
      where: { id: a.id },
      update: { records: a.records, date: a.date ? new Date(a.date) : new Date() },
      create: {
        id: a.id,
        date: a.date ? new Date(a.date) : new Date(),
        groupId: a.groupId || 'admin',
        coachId: a.coachId || null,
        records: a.records || []
      }
    });
    res.json(att);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// PAYMENTS
// ──────────────────────────────────────────────────────────
app.post('/api/payments', async (req, res) => {
  const { id, playerId, playerName, coachId, coachName, type, month, amount, date, note } = req.body;
  try {
    const payment = await prisma.payment.upsert({
      where: { id: id || 'new' },
      update: { playerName, coachId, coachName, type, month, amount: parseFloat(amount), date: date ? new Date(date) : new Date(), note },
      create: { id, playerId, playerName, coachId, coachName, type, month, amount: parseFloat(amount), date: date ? new Date(date) : new Date(), note }
    });
    res.json(payment);
  } catch (e) {
    console.error('Payment error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/payments/delete', async (req, res) => {
  const { id } = req.body;
  try { await prisma.payment.delete({ where: { id } }); res.json({ ok: true }); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// EVALUATIONS
// ──────────────────────────────────────────────────────────
app.post('/api/evaluations', async (req, res) => {
  const e = req.body;
  try {
    const evaluation = await prisma.evaluation.upsert({
      where: { id: e.id || 'new' },
      update: { speed: e.speed, technique: e.technique, teamwork: e.teamwork, note: e.note, date: e.date ? new Date(e.date) : new Date() },
      create: { id: e.id, playerId: e.playerId, coachId: e.coachId, speed: e.speed, technique: e.technique, teamwork: e.teamwork, note: e.note, date: e.date ? new Date(e.date) : new Date() }
    });
    res.json(evaluation);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// MESSAGES
// ──────────────────────────────────────────────────────────
app.post('/api/messages', async (req, res) => {
  const { id, from, to, fromName, toName, text, files, date, read } = req.body;
  try {
    const msg = await prisma.message.upsert({
      where: { id: id || 'new' },
      update: { read: !!read },
      create: { id, from, to, fromName, toName, text, files: files || null, date: date ? new Date(date) : new Date(), read: !!read }
    });
    res.json(msg);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ──────────────────────────────────────────────────────────
// TRAININGS
// ──────────────────────────────────────────────────────────
app.post('/api/trainings', async (req, res) => {
  const t = req.body;
  try {
    const training = await prisma.training.upsert({
      where: { id: t.id || 'new' },
      update: { groupId: t.groupId, coachId: t.coachId, days: t.days, time: t.time, duration: parseInt(t.duration), field: t.field, title: t.title, trainingFocus: t.trainingFocus, note: t.note },
      create: { id: t.id, groupId: t.groupId, coachId: t.coachId, days: t.days || [], time: t.time, duration: parseInt(t.duration) || 90, field: t.field || '', title: t.title, trainingFocus: t.trainingFocus, note: t.note }
    });
    res.json(training);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/trainings/delete', async (req, res) => {
  const { id } = req.body;
  try { await prisma.training.delete({ where: { id } }); res.json({ ok: true }); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.listen(PORT, () => console.log(`✅ Server v5 running on port ${PORT}`));
