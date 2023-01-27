import styled from 'styled-components';
import { media } from '../../../styles';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    ${media.large} {
      max-width: 760px;
    }
  }
`;

const AboutBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
`;

const AboutTitle = styled.h4`
  font-family: 윤고딕, sans-serif;
  font-size: 31px;
  font-weight: 600;
  color: rgb(70, 56, 132);
  &:after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 3px solid rgb(51, 154, 240);
    margin: 20px auto;
  }
`;

export { AboutContainer, AboutBottom, AboutTitle };
