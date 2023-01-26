import Link from 'next/link';
import Image from 'next/image';
import { HeaderTopContainer } from './styles';
import HeaderTopLeft from './HeaderTopLeft';
import HeaderTopRight from './HeaderTopRight';

export default function HeaderTop() {
  return (
    <HeaderTopContainer>
      <HeaderTopLeft />

      <Link href="/">
        <Image src="/svg/Logo.svg" alt="logo" width={120} height={96} />
      </Link>

      <HeaderTopRight />
    </HeaderTopContainer>
  );
}
