import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addQuestionAPI,
  readQuestionAPI,
  updateQuestionAPI,
} from '../../../pages/api/questions/questionsApi';
import { toast } from 'react-toastify';

export default function useAddQuestion() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    title: '',
    body: '',
    phone: '',
    email: '',
  });
  const { username, password, title, body, phone, email } = inputs;
  const [agree, setAgree] = useState(false);
  const addQuestionMutate = useMutation(addQuestionAPI);
  const updateQuestionMutate = useMutation(updateQuestionAPI);

  useQuery('updateQuestion', () => readQuestionAPI(id), {
    onSuccess: (data) => {
      setInputs({
        ...inputs,
        username: data.username,
        password: data.password,
        title: data.title,
        body: data.body,
        phone: data.phone,
        email: data.email,
      });
    },
    onError: () => {},
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onToggleAgree = () => setAgree((prev) => !prev);

  const onAddQuestion = async (e: MouseEvent) => {
    e.preventDefault();

    if ([username, password, title, body].includes('')) {
      toast.error('* 표시는 필수 작성해 주세요');
      return;
    }

    if (!agree) {
      toast.error('정보 제공에 동의해 주셔야 합니다.');
      return;
    }

    if (!id) {
      // Add Question
      const response = await addQuestionMutate.mutateAsync({
        username,
        password,
        title,
        body,
        phone,
        email,
      });
      await queryClient.clear();
      await router.replace(`/questions/${response.id}`);
    } else {
      // Update Question
      const response = await updateQuestionMutate.mutateAsync({
        id,
        username,
        password,
        title,
        body,
        phone,
        email,
      });
      await queryClient.clear();
      await router.replace(`/questions/${response.id}`);
    }
  };

  return {
    username,
    password,
    title,
    body,
    phone,
    email,
    agree,
    onChange,
    onToggleAgree,
    onAddQuestion,
  };
}
