import AddForm from './AddForm';
import { AddQuestionContainer, AddQuestionFlexBox } from './styles';

export default function AddQuestion() {
  return (
    <AddQuestionContainer>
      <AddQuestionFlexBox>
        <AddForm />
      </AddQuestionFlexBox>
    </AddQuestionContainer>
  );
}
