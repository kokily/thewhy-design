import styled from 'styled-components';
import { media } from '../../../../styles';

const AboutContentsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.5rem;
  width: 100%;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 760px;
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    .text {
      flex: none !important;
      width: 100%;
    }
    .image {
      display: none;
    }
  }
`;

const AboutContentsLayout = styled.div`
  flex: 0 0 60%;
`;

const AboutContentsTitle = styled.h2`
  font-family: '윤고딕320';
  font-size: 31px;
  font-weight: 600;
  font-style: normal;
  color: #463884;
  -webkit-animation-name: maskUp;
  animation-name: maskUp;
  animation-delay: 100ms;
  animation-duration: 1s;
`;

const AboutContentsImageBox = styled.div`
  flex: 0 0 40%;
  height: auto;
`;

export {
  AboutContentsContainer,
  AboutContentsLayout,
  AboutContentsTitle,
  AboutContentsImageBox,
};
