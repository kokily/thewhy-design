import type { ChangeEvent, MouseEvent } from 'react';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addReplyAPI,
  readQuestionAPI,
  removeQuestionAPI,
  removeReplyAPI,
  validPasswordAPI,
} from '../../../pages/api/questions/questionsApi';
import { toast } from 'react-toastify';

export default function useReadQuestion() {
  const { status } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;

  // 댓글 창 토글 toggle
  const [toggle, setToggle] = useState(false);

  // 댓글 내용 reply
  const [reply, setReply] = useState('');

  // 문의 글 삭제 questionRemoveModal, 댓글 삭제 replyRemoveModal
  const [questionRemoveModal, setQuestionRemoveModal] = useState(false);
  const [replyRemoveModal, setReplyRemoveModal] = useState(false);

  // Data Fetching
  const { data, refetch } = useQuery(
    'readQuestion',
    () => readQuestionAPI(id),
    {
      enabled: true,
    }
  );

  // Mutations
  const removeQuestionMutate = useMutation(removeQuestionAPI);
  const addReplyMutate = useMutation(addReplyAPI);
  const removeReplyMutate = useMutation(removeReplyAPI);
  const validPasswordMutate = useMutation(validPasswordAPI);

  const onToggle = () => setToggle((prev) => !prev);

  const onChangeReply = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  // 문의 글 삭제
  const onRemoveQuestion = async () => {
    if (id) {
      // 로그인 상태라면 관리자 삭제
      if (status === 'authenticated') {
        await removeQuestionMutate.mutateAsync({ id });
        await queryClient.clear();
        await router.replace('/questions');
      } else {
        // 일반 사용자라면 작성 시 비밀번호 입력
        const password = window.prompt('작성 시 비밀번호를 입력해 주세요.');

        if (password) {
          await removeQuestionMutate.mutateAsync({ id, password });
          await queryClient.clear();
          await router.replace('/questions');
        } else {
          return;
        }
      }
    } else {
      return;
    }
  };

  // 문의 글 수정
  const onUpdateQuestion = async () => {
    if (id) {
      const password = await window.prompt('작성 시 비밀번호를 입력하세요');

      if (password) {
        const valid = await validPasswordMutate.mutateAsync({
          questionId: id,
          password,
        });

        if (!valid) {
          toast.error('비밀번호가 틀렸습니다.');
          return;
        }

        router.push(`/questions/update/${id}`);
      } else {
        return;
      }
    } else {
      return;
    }
  };

  // 댓글 작성
  const onAddReply = async (e: MouseEvent) => {
    e.preventDefault();

    if (id) {
      if (status === 'authenticated') {
        if ([reply].includes('')) {
          toast.error('답글 작성 후 저장하세요!');
          return;
        }

        await addReplyMutate.mutateAsync({ reply, questionId: id });
        await queryClient.clear();
        await refetch();
      } else {
        console.log('로그인 후 이용하세요!');
        return;
      }
    } else {
      console.log('id 값이 없습니다!');
      return;
    }
  };

  // 댓글 삭제
  const onRemoveReply = async () => {
    if (id) {
      if (status === 'authenticated') {
        setReply('');
        setToggle(false);
        await removeReplyMutate.mutateAsync(id);
        await queryClient.clear();
        await refetch();
      } else {
        return;
      }
    } else {
      return;
    }
  };

  // 문의 글 삭제 모달 토글
  const onQuestionRemoveModalClick = () => {
    setQuestionRemoveModal(true);
  };

  const onQuestionRemoveConfirm = () => {
    onRemoveQuestion();
    setQuestionRemoveModal(false);
  };

  const onQuestionRemoveCancel = () => {
    setQuestionRemoveModal(false);
  };

  // 댓글 삭제 모달 토글
  const onReplyRemoveModalClick = () => {
    setReplyRemoveModal(true);
  };

  const onReplyRemoveConfirm = () => {
    onRemoveReply();
    setReplyRemoveModal(false);
  };

  const onReplyRemoveCancel = () => {
    setReplyRemoveModal(false);
  };

  return {
    question: data,
    toggle,
    onToggle,
    reply,
    onChangeReply,
    questionRemoveModal,
    onQuestionRemoveModalClick,
    onQuestionRemoveConfirm,
    onQuestionRemoveCancel,
    replyRemoveModal,
    onReplyRemoveModalClick,
    onReplyRemoveConfirm,
    onReplyRemoveCancel,
    onAddReply,
    onUpdateQuestion,
    isLogged: status === 'authenticated',
  };
}
