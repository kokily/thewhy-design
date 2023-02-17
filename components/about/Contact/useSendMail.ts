import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { sendMailAPI } from '../../../pages/api/email/emailApi';
import { toast } from 'react-toastify';

export default function useSendMail() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const { name, email, subject, body } = inputs;

  const sendMailMutate = useMutation(sendMailAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClear = () => {
    setInputs({
      name: '',
      email: '',
      subject: '',
      body: '',
    });
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await sendMailMutate.mutateAsync({ ...inputs });
      toast.success(`메일 전송 (${response})`);
    } catch (err: any) {
      console.log(err);
    }

    queryClient.clear();
    onClear();
  };

  return { name, email, subject, body, onChange, onClear, onSubmit };
}
