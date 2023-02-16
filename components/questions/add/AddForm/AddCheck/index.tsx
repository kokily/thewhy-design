import { AddCheckContainer } from './styles';

interface Props {
  agree: boolean;
  onToggleAgree: () => void;
}

export default function AddCheck({ agree, onToggleAgree }: Props) {
  return (
    <AddCheckContainer agree={agree}>
      <input
        type="checkbox"
        name="agree"
        checked={agree}
        onChange={onToggleAgree}
      />
      <label>아래 정보에 동의합니다.</label>
    </AddCheckContainer>
  );
}
