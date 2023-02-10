import Modal from '../Modal';
import { ReadButtonsButton, ReadButtonsContainer } from './styles';

interface Props {
  modal: boolean;
  onRemoveClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onUpdate: () => void;
}

export default function ReadButtons({ ...rest }: Props) {
  return (
    <>
      <ReadButtonsContainer>
        <ReadButtonsButton className="remove" onClick={rest.onRemoveClick}>
          삭 제
        </ReadButtonsButton>

        <ReadButtonsButton className="update" onClick={rest.onUpdate}>
          수 정
        </ReadButtonsButton>

        <Modal
          visible={rest.modal}
          onConfirm={rest.onConfirm}
          onCancel={rest.onCancel}
        />
      </ReadButtonsContainer>
    </>
  );
}
