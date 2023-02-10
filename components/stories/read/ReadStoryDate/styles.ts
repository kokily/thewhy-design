import styled from 'styled-components';

const Container = styled.div`
  flex: 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Day = styled.span`
  background: #f7f7f7;
  border-radius: 2px 2px 0 0;
  color: #0088cc;
  display: block;
  font-size: 18px;
  font-weight: 900;
  padding: 10px;
  &.week {
    display: block;
    background: #0088cc;
    border-radius: 0 0 2px 2px;
    color: #fff;
    font-size: 0.8em;
    line-height: 1.8;
    padding: 1px 10px;
    text-transform: uppercase;
  }
`;

export { Container, Day };
