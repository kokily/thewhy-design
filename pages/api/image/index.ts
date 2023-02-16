import type { NextApiRequest, NextApiResponse } from 'next';
import aws from 'aws-sdk';
import moment from 'moment';

export default async function imageUploadHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  aws.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  });

  const s3 = new aws.S3({
    apiVersion: '2006-03-01',
  });

  if (req.method === 'POST') {
    const { name, type } = req.body;
    const Params = {
      Bucket: 'image.thewhy.kr',
      Key: `${moment().format('YYYYMMDD_HHmmdd')}_${name.trim()}`,
      ContentType: type,
      ACL: 'public-read',
      Expires: 600,
    };

    const url = await s3.getSignedUrlPromise('putObject', Params);

    res.status(200).json({ url });
  } else {
    res.status(500).json({ message: 'Error on Image upload' });
  }
}
