import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function listNoticesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const title = req.query.title as string;
  const cursor = req.query.qursor ?? '';
  const cursorObj =
    cursor === '' ? undefined : { id: parseInt(cursor.toString()) };
  const limit = 25;

  if (req.method === 'GET') {
    const notices = await db.notice.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      cursor: cursorObj,
      skip: cursor !== '' ? 1 : 0,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(notices);
  } else {
    res.status(400);
  }
}
