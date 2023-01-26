import styled from 'styled-components';
import { media } from '../../../../styles';

const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  border-bottom: 0.4px solid #dfdfdf;
  transition: 0.2s all;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    justify-content: center;
  }
  img {
    cursor: pointer;
  }
`;

export { HeaderTopContainer };
