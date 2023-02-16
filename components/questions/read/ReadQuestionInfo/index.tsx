import type { Question } from '@prisma/client';
import { FaUserAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  QuestionInfoContainer,
  QuestionInfoContents,
  QuestionInfoItem,
} from './styles';

interface Props {
  question: Question;
}

export default function ReadQuestionInfo({ question }: Props) {
  return (
    <QuestionInfoContainer>
      <h3>작성자</h3>
      <QuestionInfoContents>
        <QuestionInfoItem>
          <FaUserAlt />
          이름 <span>{question.username} 님</span>
        </QuestionInfoItem>
        <QuestionInfoItem>
          <FaPhone />
          전화번호 <span>{question.phone}</span>
        </QuestionInfoItem>
        <QuestionInfoItem>
          <MdEmail />
          이메일 <span>{question.email}</span>
        </QuestionInfoItem>
      </QuestionInfoContents>
    </QuestionInfoContainer>
  );
}
