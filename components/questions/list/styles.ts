import styled, { css } from 'styled-components';
import { media } from '../../../styles';

const ListQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListQuestionsContents = styled.div`
  width: 100%;
  justify-content: center;
  ${media.large} {
    max-width: 760px;
  }
`;

const ListQuestionsButton = styled.a`
  height: 40px;
  font-family: '윤고딕';
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem 0.6rem 1rem;
  background: white;
  color: #db3603;
  border: 2px solid #db3603;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: #db3603;
    color: white;
  }
`;

const ListQuestionsSearchBox = styled.div<{ small: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${(props) =>
    props.small &&
    css`
      justify-content: flex-end;
    `}
`;

export {
  ListQuestionsContainer,
  ListQuestionsContents,
  ListQuestionsButton,
  ListQuestionsSearchBox,
};
