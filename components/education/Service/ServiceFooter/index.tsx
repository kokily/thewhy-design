import Image from 'next/image';
import { ServiceFooterContainer } from './styles';

export default function ServiceFooter() {
  return (
    <ServiceFooterContainer>
      <Image
        className="footer"
        src="/svg/footer.svg"
        alt="커뮤니케이션 교육"
        width={825}
        height={121}
      />
    </ServiceFooterContainer>
  );
}
