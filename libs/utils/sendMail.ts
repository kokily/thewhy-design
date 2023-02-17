import type { Transporter, SendMailOptions } from 'nodemailer';
import nodemailer from 'nodemailer';

export interface MailProps {
  name: string;
  email: string;
  subject: string;
  body: string;
}

export default async function SendMail({
  ...rest
}: MailProps): Promise<string | null> {
  const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
  });

  const options: SendMailOptions = {
    from: rest.email,
    to: 'thewhy@thewhy.kr',
    subject: 'The Y Consulting 홈페이지 문의 메일 알림',
    html: `
      <h2>제목 : ${rest.subject}</h2>
      <h3>작성자 : ${rest.name} 님 (${rest.email})</h3>
      <p>${rest.body}</p>
    `,
  };

  try {
    await transporter.sendMail(options);

    return rest.subject;
  } catch (err: any) {
    throw new Error(`${err}`);
  }
}
