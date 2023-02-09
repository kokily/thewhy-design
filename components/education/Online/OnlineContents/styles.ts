import styled from 'styled-components';
import { media } from '../../../../styles';

const OnlineContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  max-width: 720px;
  width: 100%;
  ul {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    border-top: 2px solid rgb(73, 53, 134);
    font-family: 윤고딕320;
    font-size: 17px;
    color: #777;
    margin-top: 0;
    padding-top: 1.2rem;
    &.end {
      border-bottom: 2px solid rgb(73, 53, 134);
      padding-bottom: 1.2rem;
    }
    li {
      line-height: 1.6;
    }
  }
`;

const OnlineContentsRow = styled.div`
  display: flex;
  width: 100%;
  ${media.medium} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const OnlineContentsCol = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100px;
    height: auto;
  }
`;

const OnlineContentsList = styled.ul`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  border-top: 2px solid rgb(73, 53, 134);
  font-family: 윤고딕320;
  font-size: 17px;
  color: #777;
  margin-top: 0;
  padding-top: 1.2rem;
  &.end {
    border-bottom: 2px solid rgb(73, 53, 134);
    padding-bottom: 1.2rem;
  }
`;

const OnlineContentsItem = styled.li`
  line-height: 1.6;
`;

export {
  OnlineContentsContainer,
  OnlineContentsRow,
  OnlineContentsCol,
  OnlineContentsList,
  OnlineContentsItem,
};
