import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import useMedia from '../../../../../libs/hooks/useMedia';
import {
  EtcLinkList,
  FooterCopyrightEtcLink,
  FooterCopyrightItemContainer,
} from './styles';

export default function FooterCopyrightItem() {
  const isSmall = useMedia('(max-width: 480px)');

  const Logo = () => (
    <Link href="/">
      <a>
        <Image src="/images/logo2.png" width={66} height={32} alt="Logo" />
      </a>
    </Link>
  );

  const Copy = () =>
    isSmall ? (
      <p>
        <p>Copyright(c) 2021. All Rightreserved.</p>
        <p>
          <strong>사업자등록번호</strong> 640-88-02162
        </p>
        <p>
          <strong>통신판매업신고</strong> 제2021-다산-0477
        </p>
      </p>
    ) : (
      <p>
        Copyright(c) 2021. All Right Reserved. <strong>사업자 등록번호</strong>{' '}
        640-88-02162 <strong>통신판매업신고</strong> 제2021-다산-0477
      </p>
    );

  const Links = () => (
    <FooterCopyrightEtcLink>
      <EtcLinkList>
        <li>
          <MdKeyboardArrowRight />
          <Link href="/faq">
            <a>FAQ's</a>
          </Link>
        </li>
        <li>
          <MdKeyboardArrowRight />
          <Link href="/term">
            <a>이용약관</a>
          </Link>
        </li>
        <li>
          <MdKeyboardArrowRight />
          <Link href="/privacy">
            <a>개인정보처리방침</a>
          </Link>
        </li>
      </EtcLinkList>
    </FooterCopyrightEtcLink>
  );

  return (
    <>
      <FooterCopyrightItemContainer divide="logo">
        <Logo />
      </FooterCopyrightItemContainer>
      <FooterCopyrightItemContainer divide="copy">
        <Copy />
      </FooterCopyrightItemContainer>
      <FooterCopyrightItemContainer divide="link">
        <Links />
      </FooterCopyrightItemContainer>
    </>
  );
}
