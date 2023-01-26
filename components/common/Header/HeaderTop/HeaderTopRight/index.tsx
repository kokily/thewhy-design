import { signOut, useSession } from 'next-auth/react';
import { BiExit } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { HeaderTopRightContainer, HeaderTopRightInfos } from './styles';

export default function HeaderTopRight() {
  const { status } = useSession();

  return (
    <HeaderTopRightContainer>
      <HeaderTopRightInfos>
        050-5055-7221
        <br />
        thewhy@thewhy.kr
      </HeaderTopRightInfos>

      {status === 'authenticated' ? (
        <span className="logout" onClick={async () => await signOut()}>
          <BiExit size={32} color="#463884" />
        </span>
      ) : (
        <span>
          <FaWhatsapp size={32} color="#463884" />
        </span>
      )}
    </HeaderTopRightContainer>
  );
}
