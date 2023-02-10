import { Container, Day } from './styles';

interface Props {
  date: string;
}

export default function ReadStoryDate({ date }: Props) {
  const target = new Date(new Date(date).getTime() + 9 * 60 * 60 * 1000);
  const month = new Date(target).getMonth() + 1;
  const day = new Date(target).getDay();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date(target).getDay()];

  return (
    <Container>
      <Day>
        {month}/{day}
      </Day>
      <Day className="week">{dayOfWeek}</Day>
    </Container>
  );
}
