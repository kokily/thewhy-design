import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import db from '../../../libs/db';

export default async function addQuestionHandler(
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

  const { username, password, title, body, phone, email }: RequestType =
    req.body;

  if (req.method === 'POST') {
    const question = await db.question.create({
      data: {
        username,
        password: await bcrypt.hash(password, 10),
        title,
        body,
        phone,
        email,
      },
    });

    res.status(200).json(question);
  } else {
    res.status(400);
  }
}
