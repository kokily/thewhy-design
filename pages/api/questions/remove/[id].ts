import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '../../../../libs/db';
import { getSession } from 'next-auth/react';

export default async function removeQuestionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const { password }: { password: string } = req.body;

  if (req.method === 'PATCH') {
    const session = await getSession({ req });
    const question = await db.question.findUnique({
      where: { id },
    });

    if (session.user) {
      await db.question.delete({
        where: { id },
      });
    } else {
      const valid = await bcrypt.compare(password, question.password);

      if (!valid) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }

      await db.question.delete({
        where: { id },
      });
    }

    res.status(204);
  } else {
    res.status(400);
  }
}
