import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import db from '../../../../libs/db';

export default async function removeReplyHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const questionId = req.query.id as string;

  if (req.method === 'DELETE') {
    const session = await getSession({ req });

    if (!session.user) {
      throw new Error('접근 권한이 없습니다.');
    }

    await db.question.update({
      where: { id: questionId },
      data: {
        reply: null,
        updatedAt: new Date(),
      },
    });

    res.status(204);
  } else {
    res.status(400);
  }
}
