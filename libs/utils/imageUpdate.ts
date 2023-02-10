import axios from 'axios';

export async function imageUpdate(file: File): Promise<string> {
  const { data }: { data: { url: string } } = await axios.post('/api/image', {
    name: file.name,
    type: file.type,
  });

  await axios.put(data.url, file, {
    headers: {
      'Content-Type': file.type,
      'Access-Control-Allow-Origin': '*',
    },
  });

  const response = data.url
    .split('?')[0]
    .replace('s3.apnortheast-2.amazonaws.com/', '');

  return response;
}
