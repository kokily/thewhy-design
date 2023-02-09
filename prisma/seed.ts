import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const db = new PrismaClient();

async function seed() {
  await db.admin.create({
    data: {
      password: await bcrypt.hash(process.env.PASSWORD!, 10),
    },
  });
}

seed();
