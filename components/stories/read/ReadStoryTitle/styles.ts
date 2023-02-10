import styled from 'styled-components';

const Container = styled.div`
  flex: 0 0 calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const Title = styled.div`
  h2 {
    font-size: 2rem;
    line-height: 42px;
    color: #1d4fd8;
    margin: 0;
    margin-bottom: 5px;
    letter-spacing: -0.05rem;
  }
`;

const TagsBox = styled.div`
  span {
    margin-right: 0.5rem;
    color: #1340bd;
    opacity: 0.5;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      opacity: 1;
      color: #4060b6;
    }
  }
`;

export { Container, Title, TagsBox };
