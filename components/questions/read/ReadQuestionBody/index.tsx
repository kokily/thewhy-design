import { QuestionBodyContainer, QuestionBodyPane } from './styles';

interface Props {
  body: string;
}

export default function ReadQuestionBody({ body }: Props) {
  return (
    <QuestionBodyContainer>
      <QuestionBodyPane>{body}</QuestionBodyPane>
    </QuestionBodyContainer>
  );
}
