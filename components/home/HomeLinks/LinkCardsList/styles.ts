import styled from 'styled-components';
import { media } from '../../../../styles';

const LinkCardsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 100%;
    justify-content: center;
  }
`;

export { LinkCardsListContainer };
