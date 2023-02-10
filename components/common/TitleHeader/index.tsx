import {
  TitleHeaderContainer,
  TitleHeaderContent,
  TitleHeaderTitle,
} from './styles';

interface Props {
  title: string;
}

export default function TitleHeader({ title }: Props) {
  return (
    <TitleHeaderContainer>
      <TitleHeaderContent>
        <TitleHeaderTitle>{title}</TitleHeaderTitle>
      </TitleHeaderContent>
    </TitleHeaderContainer>
  );
}
