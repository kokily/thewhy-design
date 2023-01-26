import styled, { css } from 'styled-components';
import { media } from '../../../styles';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background: white;
`;

const HeaderLayout = styled.header<{ move: number }>`
  display: flex;
  justify-content: center;
  width: 1110px;
  height: 128px;
  transition: 0.2s;
  ${media.large} {
    width: 100%;
  }
  ${media.medium} {
    width: 100%;
  }
  ${(props) =>
    props.move > 80 &&
    css`
      height: 70px;
    `}
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1110px;
  height: 62px;
  transition: 0.2s all;
  ${media.large} {
    width: 760px;
  }
  ${media.medium} {
    width: 100%;
    height: 100%;
  }
  ${media.xsmall} {
    width: 100%;
  }
`;

export { HeaderContainer, HeaderLayout, NavContainer };
