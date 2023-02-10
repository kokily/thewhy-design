import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';
import isSession from '../../../libs/utils/isSession';

export default async function addStoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    await isSession(req);

    const story = await db.story.create({
      data: {
        ...req.body,
      },
    });

    res.status(200).json(story);
  } else {
    res.status(400);
  }
}
