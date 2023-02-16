import Modal from '../../../common/Modal';
import { QuestionButton, QuestionButtonContainer } from './styles';

interface Props {
  modal: boolean;
  onRemoveClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onRemoveReplyClick: () => void;
  onToggle: () => void;
  reply: boolean;
}

export default function ReadQuestionButtons({ ...rest }: Props) {
  return (
    <>
      <QuestionButtonContainer>
        <QuestionButton className="remove" onClick={rest.onRemoveClick}>
          본문 삭제
        </QuestionButton>

        {rest.reply ? (
          <QuestionButton className="update" onClick={rest.onRemoveReplyClick}>
            답글삭제
          </QuestionButton>
        ) : (
          <QuestionButton className="update" onClick={rest.onToggle}>
            답글달기
          </QuestionButton>
        )}
      </QuestionButtonContainer>

      <Modal
        visible={rest.modal}
        onConfirm={rest.onConfirm}
        onCancel={rest.onCancel}
      />
    </>
  );
}
