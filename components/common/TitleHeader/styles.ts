import styled from 'styled-components';
import { media } from '../../../styles';

const TitleHeaderContainer = styled.div`
  margin: 0 0 35px 0;
  width: 100%;
  text-align: center;
`;

const TitleHeaderContent = styled.div`
  display: inline-block;
  background: #f7f7f7;
  width: 100%;
  padding: 65px 0;
  ${media.large} {
    max-width: 760px;
  }
  ${media.small} {
    max-width: 100%;
  }
`;

const TitleHeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  font-family: 'Poppins', Arial, sans-serif;
  color: #212529;
  text-align: center;
`;

export { TitleHeaderContainer, TitleHeaderContent, TitleHeaderTitle };
