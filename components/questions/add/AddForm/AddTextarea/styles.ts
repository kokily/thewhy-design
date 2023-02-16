import styled from 'styled-components';

const AddTextareaContainer = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s ease-in-out;
  resize: vertical;
  padding: 0.5rem;
  font-size: 1em;
  font-weight: 400;
  color: #495057;
  &:focus {
    outline: none;
    background: #fcfcfc;
    border: 1px solid #0c89d1;
  }
`;

export { AddTextareaContainer };
