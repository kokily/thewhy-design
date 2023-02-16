import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import db from '../../../libs/db';

export default async function addReplyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = {
    body: string;
    questionId: string;
  };

  const { body, questionId }: RequestType = req.body;

  if (req.method === 'POST') {
    const session = await getSession({ req });

    if (!session.user) {
      throw new Error('접근 권한이 없습니다.');
    }

    const question = await db.question.update({
      where: { id: questionId },
      data: {
        reply: body,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(question);
  } else {
    res.status(400);
  }
}
