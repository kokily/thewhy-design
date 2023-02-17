import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const db = new PrismaClient();

async function seed() {
  const password = await bcrypt.hash(process.env.PASSWORD!, 10);
  await db.admin.create({
    data: { password },
  });
}

seed();
