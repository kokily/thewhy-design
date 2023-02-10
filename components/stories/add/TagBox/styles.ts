import styled from 'styled-components';

const AddTagBoxContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  word-break: keep-all;
  p {
    margin-right: 1.3rem;
  }
`;

const AddTagForm = styled.form`
  background: none;
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    background: none;
    &::placeholder {
      color: #777;
    }
  }
`;

const AddTagButton = styled.button`
  color: #3db7cc;
  border: 1px solid #3db7cc;
  border-radius: 8px;
  background: none;
  padding: 0.3rem 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: #58aebd;
    color: white;
    border: 1px solid #88c0ca;
  }
  &:active {
    transform: translateY(2px);
  }
`;

// Tags List Style
const TagsListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1.2rem;
`;

// Tag Item Style
const TagItemContainer = styled.div`
  cursor: pointer;
  color: #6799ff;
  transition: 0.2s all;
  &:hover {
    color: #f15f5f;
  }
  & + & {
    margin-left: 1.5rem;
  }
`;

export {
  AddTagBoxContainer,
  AddTagForm,
  AddTagButton,
  TagsListContainer,
  TagItemContainer,
};
