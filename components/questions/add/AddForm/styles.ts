import styled from 'styled-components';

const AddFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const AddFormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 1rem;
  label {
    font-family: 'NanumGothic-Regular';
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    span {
      color: red;
    }
  }
  svg {
    position: absolute;
    top: 30px;
    left: 8px;
  }
`;

const AddFormInfo = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;
  pre {
    font-size: 87.5%;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
`;

const AddFormButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export { AddFormContainer, AddFormInputGroup, AddFormInfo, AddFormButtonBox };
