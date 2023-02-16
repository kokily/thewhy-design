import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function listQuestionsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const title = req.query.title as string;
  const cursor = req.query.cursor ?? '';
  const cursorObj = cursor === '' ? undefined : { id: cursor.toString() };
  const limit = 25;

  if (req.method === 'GET') {
    const questions = await db.question.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(questions);
  } else {
    res.status(400);
  }
}
