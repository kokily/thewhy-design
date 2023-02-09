import styled from 'styled-components';
import { media } from '../../../../styles';

const ServiceHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.5rem;
  max-width: 720px;
  ${media.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ServiceHeaderTitle = styled.h2`
  font-family: '윤고딕330';
  font-size: 26px;
  font-weight: 600;
  color: #493586;
`;

const ServiceHeaderBody = styled.p`
  font-family: '윤고딕320';
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: #777;
  word-break: keep-all;
  margin: 0 0 20px;
  white-space: pre-wrap;
`;

export { ServiceHeaderContainer, ServiceHeaderTitle, ServiceHeaderBody };
