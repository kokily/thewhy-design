import type { Question } from '@prisma/client';
import { Table } from './styles';

interface Props {
  questions: Question[];
  onReadQuestion: (id: string) => void;
}

export default function ListQuestionsTable({ ...rest }: Props) {
  const { questions, onReadQuestion } = rest;

  return (
    <Table>
      <thead>
        <tr>
          <th>등록날짜</th>
          <th>제 목</th>
          <th>질문자</th>
          <th>답변</th>
        </tr>
      </thead>

      <tbody>
        {questions.length > 0 ? (
          questions.map((question) => (
            <tr key={question.id} onClick={() => onReadQuestion(question.id)}>
              <td style={{ textAlign: 'center' }}>
                {new Date(question.createdAt).toLocaleDateString()}
              </td>
              <td>{question.title}</td>
              <td style={{ textAlign: 'center' }}>{question.username}님</td>
              <td style={{ textAlign: 'center' }}>
                {question.reply ? (
                  <strong style={{ color: 'blue' }}>완료</strong>
                ) : (
                  <span style={{ color: 'red' }}>미진행</span>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={4}>
              작성된 문의글이 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
