import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- Auth Routes ---
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        coachProfile: true,
        parentProfile: true,
        playerProfile: true,
      }
    });

    if (user && user.password === password) {
      // Map database user to frontend user object structure
      res.json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role.toLowerCase(),
        ...(user.coachProfile || {}),
        ...(user.parentProfile || {}),
        ...(user.playerProfile || {})
      });
    } else {
      res.status(401).json({ error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- Generic Fetch Route (To get all state at once) ---
app.get('/api/initial-data', async (req, res) => {
  try {
    const [groups, coaches, players, payments, attendance, coachesAttendance, evals, messages, trainings] = await Promise.all([
      prisma.group.findMany(),
      prisma.coach.findMany({ include: { user: true } }),
      prisma.player.findMany(),
      prisma.payment.findMany(),
      prisma.attendance.findMany(),
      prisma.attendance.findMany({ where: { coachId: { not: null } } }), // Simplified for now
      prisma.evaluation.findMany(),
      prisma.message.findMany(),
      prisma.training.findMany()
    ]);

    res.json({
      groups,
      coaches: coaches.map(c => ({ ...c, ...c.user, id: c.id })),
      players,
      payments,
      attendance,
      coachesAttendance,
      evals,
      messages,
      trainings
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- Specific Update Routes ---
app.post('/api/players/update', async (req, res) => {
  const { id, ...data } = req.body;
  const player = await prisma.player.upsert({
    where: { id: id || 'new' },
    update: data,
    create: data
  });
  res.json(player);
});

app.post('/api/payments', async (req, res) => {
  const payment = await prisma.payment.create({ data: req.body });
  res.json(payment);
});

// Save Attendance
app.post('/api/attendance', async (req, res) => {
  try {
    const a = req.body;
    const att = await prisma.attendance.upsert({
      where: { id: a.id },
      update: { records: a.records },
      create: { id: a.id, date: new Date(a.date), groupId: a.groupId, coachId: a.coachId, records: a.records }
    });
    res.json(att);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/messages', async (req, res) => {
  const msg = await prisma.message.create({ data: req.body });
  res.json(msg);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
