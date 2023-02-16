import styled from 'styled-components';

const AddInputContainer = styled.input`
  padding: 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.12s;
  padding-left: 40px;
  &:focus {
    outline: none;
    background: #fcfcfc;
    border: 1px solid #0c89d1;
  }
`;

export { AddInputContainer };
