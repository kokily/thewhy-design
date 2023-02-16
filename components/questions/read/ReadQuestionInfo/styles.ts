import styled from 'styled-components';

const QuestionInfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  text-align: center;
`;

const QuestionInfoContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionInfoItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  margin-bottom: 0.2rem;
  svg {
    position: absolute;
    left: 0;
    border-width: 1px;
    width: 25px;
    height: 25px;
    text-align: center;
    padding: 4px;
    font-size: 0.8em;
    border-style: solid;
    border-radius: 50%;
    color: #0088cc;
  }
  span {
    margin-left: 1rem;
    color: #777;
  }
`;

export { QuestionInfoContainer, QuestionInfoContents, QuestionInfoItem };
