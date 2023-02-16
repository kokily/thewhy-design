import styled from 'styled-components';
import { media } from '../../../styles';

const ReadQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReadQuestionFlexBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: center;
  margin-bottom: 1.5rem;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

const ReadQuestionButton = styled.button`
  font-weight: 600;
  background: white;
  color: #bdb219;
  padding: 0.3rem 0.6rem;
  border: 2px solid #bdb219;
  border-radius: 25px;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
  transition: 0.12s;
  cursor: pointer;
  &:hover {
    background: #bdb219;
    color: white;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

export { ReadQuestionContainer, ReadQuestionFlexBox, ReadQuestionButton };
