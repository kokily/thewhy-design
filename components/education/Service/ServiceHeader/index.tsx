import {
  ServiceHeaderBody,
  ServiceHeaderContainer,
  ServiceHeaderTitle,
} from './styles';

interface Props {
  title: string;
  body: string;
}

export default function ServiceHeader({ title, body }: Props) {
  return (
    <ServiceHeaderContainer>
      <ServiceHeaderTitle>{title}</ServiceHeaderTitle>
      <ServiceHeaderBody>{body}</ServiceHeaderBody>
    </ServiceHeaderContainer>
  );
}
