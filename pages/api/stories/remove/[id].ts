import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';
import isSession from '../../../../libs/utils/isSession';

export default async function removeStoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'DELETE') {
    await isSession(req);
    await db.story.delete({
      where: { id },
    });

    res.status(204);
  } else {
    res.status(400);
  }
}
