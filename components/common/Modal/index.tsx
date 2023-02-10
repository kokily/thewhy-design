import Button from '../Button';
import { ModalContainer, ModalContent } from './styles';

interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Modal({ ...rest }: Props) {
  if (!rest.visible) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <h2>삭제하기</h2>
        <p>지우시려면 확인을 클릭하세요</p>

        <div className="button-group">
          <Button back onClick={rest.onCancel}>
            취소
          </Button>
          <Button red onClick={rest.onConfirm}>
            확인
          </Button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}
