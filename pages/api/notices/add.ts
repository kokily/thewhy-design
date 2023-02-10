import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function addNoticeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestBody = {
    title: string;
    body: string;
  };

  const { title, body }: RequestBody = req.body;

  if (req.method === 'POST') {
    const notice = await db.notice.create({
      data: { title, body },
    });

    res.status(200).json(notice);
  } else {
    res.status(400);
  }
}
