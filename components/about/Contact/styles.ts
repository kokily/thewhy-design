import styled from 'styled-components';
import { media } from '../../../styles';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
  ${media.large} {
    img {
      max-width: 760px;
    }
  }
`;

const ContactContents = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3.5rem;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    display: block;
    width: 100%;
  }
`;

export { ContactContainer, ContactContents };
