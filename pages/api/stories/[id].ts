import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function readStoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'GET') {
    const story = await db.story.findUnique({
      where: { id },
    });

    res.status(200).json(story);
  } else {
    res.status(400);
  }
}
