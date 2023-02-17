import type { NextApiRequest, NextApiResponse } from 'next';
import type { MailProps } from '../../../libs/utils/sendMail';
import SendMail from '../../../libs/utils/sendMail';

export default async function sendMailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type RequestType = MailProps;

  const { name, email, subject, body }: RequestType = req.body;

  if (req.method === 'POST') {
    const response = await SendMail({ name, email, subject, body });

    res.status(200).json(response);
  } else {
    res.status(400);
  }
}
