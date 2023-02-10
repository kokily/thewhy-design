import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .button-group {
    display: flex;
    justify-content: flex-end;
    button + button {
      margin-left: 0.4rem;
    }
  }
  animation: 0.3s ease-out 0s 1 slideUpFromBottom;
`;

export { ModalContainer, ModalContent };
