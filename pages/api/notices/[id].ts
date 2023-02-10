import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function readNoticeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'GET') {
    const notice = await db.notice.findUnique({
      where: { id: parseInt(id) },
    });

    res.status(200).json(notice);
  } else {
    res.status(400);
  }
}
