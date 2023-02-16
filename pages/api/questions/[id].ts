import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../libs/db';

export default async function readQuestionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === 'GET') {
    const question = await db.question.findUnique({
      where: { id },
    });

    res.status(200).json(question);
  } else {
    res.status(400);
  }
}
