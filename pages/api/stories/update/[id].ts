import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../libs/db';
import isSession from '../../../../libs/utils/isSession';

export default async function updateStoryHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'PUT') {
    await isSession(req);
    
    const story = await db.story.update({
      where: { id },
      data: {
        ...req.body,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(story);
  } else {
    res.status(400);
  }
}
