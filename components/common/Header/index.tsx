import useHeaderScroll from '../../../libs/hooks/useHeaderScroll';
import HeaderTop from './HeaderTop';
import Navigation from './Navigation';
import { HeaderContainer, HeaderLayout, NavContainer } from './styles';

export default function Header() {
  const { move } = useHeaderScroll();

  return (
    <HeaderContainer>
      <HeaderLayout move={move}>
        <HeaderTop />
      </HeaderLayout>

      <NavContainer>
        <Navigation />
      </NavContainer>
    </HeaderContainer>
  );
}
