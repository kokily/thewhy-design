import type { NextApiHandler } from 'next';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import db from '../../../libs/db';

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      Credentials({
        name: 'Credentials',
        credentials: {
          password: {
            label: '비밀번호',
            type: 'password',
          },
        },
        async authorize(credentials, _) {
          const admin = await db.admin.findFirst();
          const password = await credentials?.password;

          if (!admin) {
            throw new Error('관리자가 등록되어 있지 않습니다.');
          }

          if (!password) {
            throw new Error('비밀번호가 입력되지 않았습니다.');
          }

          const valid = await bcrypt.compare(password, admin.password);

          if (!valid) {
            throw new Error('비밀번호가 틀렸습니다.');
          }

          return {
            id: admin.id,
            name: '더와이컨설팅',
          };
        },
      }),
    ],
    secret: process.env.SECRET,
  });

export default authHandler;
