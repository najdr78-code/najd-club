const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial data...');

  // 1. Create Groups
  const g1 = await prisma.group.upsert({
    where: { id: 'g1' },
    update: {},
    create: { id: 'g1', name: 'البراعم', color: '#7C49A8' }
  });

  const g2 = await prisma.group.upsert({
    where: { id: 'g2' },
    update: {},
    create: { id: 'g2', name: 'الناشئين', color: '#06B6D4' }
  });

  // 2. Create Admin User
  await prisma.user.upsert({
    where: { email: 'admin@najd.sa' },
    update: {},
    create: {
      email: 'admin@najd.sa',
      password: 'Najd@2026',
      name: 'مدير النادي',
      role: 'ADMIN'
    }
  });

  // 3. Create Coach User & Profile
  const coachUser = await prisma.user.upsert({
    where: { email: 'khaled@najd.sa' },
    update: {},
    create: {
      email: 'khaled@najd.sa',
      password: 'Coach@5678',
      name: 'خالد مبارك',
      role: 'COACH',
      phone: '0501112222'
    }
  });

  await prisma.coach.upsert({
    where: { userId: coachUser.id },
    update: {},
    create: {
      userId: coachUser.id,
      groupId: 'g1'
    }
  });

  // 4. Create Parent User & Profile
  const parentUser = await prisma.user.upsert({
    where: { email: 'aalghamdi@mail.com' },
    update: {},
    create: {
      email: 'aalghamdi@mail.com',
      password: 'Parent@111',
      name: 'عبدالعزيز الغامدي',
      role: 'PARENT'
    }
  });

  const parentProfile = await prisma.parent.upsert({
    where: { userId: parentUser.id },
    update: {},
    create: {
      userId: parentUser.id
    }
  });

  // 5. Create Player
  await prisma.player.upsert({
    where: { id: 'p1' },
    update: {},
    create: {
      id: 'p1',
      name: 'أحمد عبدالعزيز',
      phone: '0555555555',
      age: 9,
      groupId: 'g1',
      position: 'مهاجم',
      status: 'نشط',
      parentId: parentProfile.id
    }
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
