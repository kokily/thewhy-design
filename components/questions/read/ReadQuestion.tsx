import useReadQuestion from './useReadQuestion';
import {
  ReadQuestionContainer,
  ReadQuestionFlexBox,
  ReadQuestionButton,
} from './styles';
import ReadQuestionButtons from './ReadQuestionButtons';
import Modal from '../../common/Modal';
import ReadQuestionInfo from './ReadQuestionInfo';
import ReadQuestionBody from './ReadQuestionBody';
import AddReply from './AddReply';
import ReadReply from './ReadReply';

export default function ReadQuestion() {
  const readQuestion = useReadQuestion();

  return readQuestion.question ? (
    <ReadQuestionContainer>
      {readQuestion.isLogged && (
        <ReadQuestionFlexBox>
          <ReadQuestionButtons
            modal={readQuestion.questionRemoveModal}
            onRemoveClick={readQuestion.onQuestionRemoveModalClick}
            onConfirm={readQuestion.onQuestionRemoveConfirm}
            onCancel={readQuestion.onQuestionRemoveCancel}
            onRemoveReplyClick={readQuestion.onReplyRemoveModalClick}
            onToggle={readQuestion.onToggle}
            reply={readQuestion.question.reply !== null ? true : false}
          />
        </ReadQuestionFlexBox>
      )}

      <ReadQuestionFlexBox>
        <ReadQuestionInfo question={readQuestion.question} />
      </ReadQuestionFlexBox>

      <ReadQuestionFlexBox>
        <ReadQuestionBody body={readQuestion.question.body} />
      </ReadQuestionFlexBox>

      <ReadQuestionFlexBox>
        <ReadQuestionButton onClick={readQuestion.onUpdateQuestion}>
          문의 글 수정(Password)
        </ReadQuestionButton>
      </ReadQuestionFlexBox>

      {readQuestion.isLogged &&
        readQuestion.toggle &&
        !readQuestion.question.reply && (
          <ReadQuestionFlexBox>
            <AddReply
              reply={readQuestion.reply}
              onChange={readQuestion.onChangeReply}
              onAddReply={readQuestion.onAddReply}
            />
          </ReadQuestionFlexBox>
        )}

      {readQuestion.question.reply && (
        <ReadReply body={readQuestion.question.reply} />
      )}

      <Modal
        visible={readQuestion.replyRemoveModal}
        onConfirm={readQuestion.onReplyRemoveConfirm}
        onCancel={readQuestion.onReplyRemoveCancel}
      />
    </ReadQuestionContainer>
  ) : null;
}
