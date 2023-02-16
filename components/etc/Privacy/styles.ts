import styled from 'styled-components';
import { media } from '../../../styles';

const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  ${media.small} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const PrivacyPreface = styled.div`
  font-family: 'Poppins', Arial, sans-serif;
  color: #777;
  font-weight: 300;
  font-size: 1.2em;
  letter-spacing: -0.05em;
  line-height: 1.8rem;
  margin: 0 0 20px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  word-break: keep-all;
  small {
    margin-top: 1rem;
    display: block;
  }
`;

const PrivacyContents = styled.div`
  width: 100%;
`;

export { PrivacyContainer, PrivacyPreface, PrivacyContents };
