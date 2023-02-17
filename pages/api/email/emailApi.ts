import type { MailProps } from '../../../libs/utils/sendMail';
import axios from 'axios';

export async function sendMailAPI({ ...rest }: MailProps) {
  const response = await axios.post<string>('/api/email', rest);
  return response.data;
}
