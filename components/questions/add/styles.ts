import styled from 'styled-components';
import { media } from '../../../styles';

const AddQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddQuestionFlexBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1110px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

export { AddQuestionContainer, AddQuestionFlexBox };
