import styled from 'styled-components';
import { media } from '../../../../../styles';

const HeaderTopRightContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.medium} {
    display: none;
  }
  .logout {
    cursor: pointer;
  }
`;

const HeaderTopRightInfos = styled.p`
  font-size: 13px;
  font-family: helvetica serif, sans-seif;
  font-weight: 600;
  color: #777;
  margin-right: 1rem;
`;

export { HeaderTopRightContainer, HeaderTopRightInfos };
