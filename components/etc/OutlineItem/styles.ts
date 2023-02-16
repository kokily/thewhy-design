import styled from 'styled-components';

const OutlineContainer = styled.div`
  width: 100%;
  text-align: left;
  font-family: 'Poppins', Arial, sans-serif;
  margin-top: 1.4rem;
  line-height: 12px;
  word-break: keep-all;
`;

const OutlineTitle = styled.h3`
  font-size: 17px;
  line-height: 24px;
  color: #212529;
  margin-bottom: 0.3rem;
`;

const FirstPane = styled.div`
  padding-left: 15px;
  font-size: 14px;
  color: #777;
  span {
    display: flex;
    margin-top: 4px;
    line-height: 20px;
    align-items: flex-start;
    font-size: 16px;
    svg {
      margin-top: 5px;
      margin-right: 5px;
      flex: 0 0 14px;
    }
    span {
      flex: 0 0 calc(100% - 14px);
    }
  }
`;

const SecondPane = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #777;
  .second_title {
    padding-left: 28px;
    line-height: 20px;
  }
  .second_child {
    font-size: 13px;
    font-weight: 300;
    color: #8d8d8d;
    margin-top: -8px;
    line-height: 24px;
    padding-left: 46px;
  }
`;

export { OutlineContainer, OutlineTitle, FirstPane, SecondPane };
