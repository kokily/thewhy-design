import Image from 'next/image';
import ServiceBody from './ServiceBody';
import ServiceFooter from './ServiceFooter';
import ServiceHeader from './ServiceHeader';
import { ServiceContainer } from './styles';

interface Props {
  education: EducationType;
}

export default function Service({ education }: Props) {
  return (
    <ServiceContainer>
      <Image
        src={`/svg/${education.img}`}
        alt={education.title}
        width={1110}
        height={296}
      />

      <ServiceHeader title={education.title} body={education.body} />
      <ServiceBody list={education.list} />
      <ServiceFooter />
    </ServiceContainer>
  );
}
