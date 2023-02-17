import styled, { css } from 'styled-components';

const MailContainer = styled.div`
  flex: 0 0 50%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Poppins', Arial, sans-serif;
  -webkit-animation-name: mask5Up;
  animation-name: mask5Up;
  animation-delay: 100ms;
  animation-duration: 1s;
  h2 {
    font-size: 2.3em;
    font-weight: 500;
    font-style: normal;
    margin: 0.5rem 0 0 0;
    color: #212529;
  }
  p {
    line-height: 26px;
    color: #777;
    margin-bottom: 1.5rem;
  }
`;

const MailForm = styled.form`
  margin-left: -5px;
  margin-right: -5px;
  .row {
    width: 100%;
    margin-bottom: 1.2rem;
    padding-left: 5px;
    padding-right: 5px;
    label {
      display: inline-block;
      font-size: 0.9em;
      font-weight: 300;
      margin-bottom: 0.5rem;
      color: #777;
    }
    input {
      display: block;
      width: 100%;
      height: auto;
      padding: 0.5rem;
      font-size: 1em;
      font-weight: 400;
      color: #495057;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      outline: none;
      transition: border-color 0.15s ease-in-out;
      -webkit-appearance: none;
      &:after {
        content: '.';
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
      }
    }
    textarea {
      display: block;
      width: 100%;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      outline: none;
      transition: border-color 0.15s ease-in-out;
      resize: vertical;
      padding: 0.5rem;
      font-size: 1em;
      font-weight: 400;
      color: #495057;
    }
  }
  .sep {
    display: flex;
    justify-content: space-around;
    div {
      flex: 0 0 50%;
      max-width: 50%;
      padding-left: 2px;
      padding-right: 2px;
    }
  }
`;

const MailButton = styled.button<{ red?: boolean }>`
  padding: 0.5rem 0.8rem;
  margin-right: 0.5rem;
  color: #0088cc;
  background-color: white;
  border: 2px solid #0088cc;
  border-radius: 25px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  &:hover {
    color: white;
    background-color: #0088cc;
  }
  ${(props) =>
    props.red &&
    css`
      color: red;
      border: 2px solid red;
      &:hover {
        color: white;
        background-color: red;
      }
    `}
`;

export { MailContainer, MailForm, MailButton };
