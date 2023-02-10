import styled, { css } from 'styled-components';

const ButtonContainer = styled.button<{
  submit?: boolean;
  back?: boolean;
  red?: boolean;
}>`
  font-size: 1rem;
  font-weight: bold;
  width: 90px;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s all;
  &:active {
    transform: translateY(1px);
  }
  ${(props) =>
    props.submit &&
    css`
      border: 1px solid #06a4ff;
      background: #06a4ff;
      color: white;
      &:hover {
        background: white;
        color: #06a4ff;
      }
    `}
  ${(props) =>
    props.back &&
    css`
      border: 1px solid #777;
      background: #777;
      color: white;
      &:hover {
        background: white;
        color: #777;
      }
    `}
    ${(props) =>
    props.red &&
    css`
      border: 1px solid #fa5252;
      background: #fa5252;
      color: white;
      &:hover {
        background: white;
        color: #fa5252;
      }
    `}
`;

export { ButtonContainer };
