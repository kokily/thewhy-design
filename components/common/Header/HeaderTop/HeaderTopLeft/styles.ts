import styled from 'styled-components';
import { media } from '../../../../../styles';

const HeaderTopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  ${media.medium} {
    display: none;
  }
`;

const HeaderTopLeftTitle = styled.div`
  font-size: 12.6px;
  font-weight: 600;
  font-family: Poppins, Arial, sans-serif;
  color: #777;
  margin-bottom: 0.7rem;
`;

const HeaderTopLeftIconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-right: 0.25rem;
  }
`;

const HeaderTopLeftIcon = styled.div`
  width: 28px;
  height: 28px;
  transition: 0.2s all;
  background-repeat: no-repeat;
  background-size: cover;
  &.youtube {
    background-image: url('/svg/Youtube_off.svg');
    &:hover {
      background-image: url('/svg/Youtube_on.svg');
    }
  }
  &.naver {
    background-image: url('/svg/Naver_off.svg');
    &:hover {
      background-image: url('/svg/Naver_on.svg');
    }
  }
`;

export {
  HeaderTopLeftContainer,
  HeaderTopLeftTitle,
  HeaderTopLeftIconsBox,
  HeaderTopLeftIcon,
};
