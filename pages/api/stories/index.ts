import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function listStoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const title = req.query.title as string;
  const tag = req.query.body as string;
  const cursor = req.query.cursor ?? '';
  const cursorObj = cursor === '' ? undefined : { id: cursor.toString() };
  const limit = 12;

  let where = tag
    ? {
        title: {
          contains: title,
        },
        tags: {
          has: tag,
        },
      }
    : {
        title: {
          contains: title,
        },
      };

  if (req.method === 'GET') {
    const stories = await db.story.findMany({
      where,
      skip: cursor !== '' ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(stories);
  } else {
    res.status(400);
  }
}
