import styled from 'styled-components';
import { media } from '../../../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  margin-bottom: 1rem;
  img {
    width: 100%;
    margin-bottom: 1.2rem;
  }
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

export { Container, FlexBox };
