import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';
import isSession from '../../../../libs/utils/isSession';

export default async function updateNoticeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestBody = {
    title: string;
    body: string;
  };

  const id = req.query.id as string;
  const { title, body }: RequestBody = req.body;

  if (req.method === 'PUT') {
    await isSession(req);

    const notice = await db.notice.update({
      where: { id: parseInt(id) },
      data: {
        title,
        body,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(notice);
  } else {
    res.status(400);
  }
}
