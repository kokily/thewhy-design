import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '../../../../libs/db';

export default async function updateQuestionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    username: string;
    password: string;
    title: string;
    body: string;
    phone?: string;
    email?: string;
  };

  const id = req.query.id as string;
  const { username, password, title, body, phone, email }: RequestType =
    req.body;

  if (req.method === 'PATCH') {
    const question = await db.question.findUnique({
      where: { id },
    });

    const valid = await bcrypt.compare(password, question.password);

    if (!valid) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    await db.question.update({
      where: { id },
      data: {
        username,
        title,
        body,
        phone,
        email,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(question);
  } else {
    res.status(400);
  }
}
