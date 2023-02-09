import styled from 'styled-components';
import { media } from '../../../../styles';

const ServiceBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  max-width: 720px;
  width: 100%;
`;

const ServiceBodyRow = styled.div`
  display: flex;
  width: 100%;
  ${media.medium} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const ServiceBodyCol = styled.div`
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

const ServiceBodyList = styled.ul`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  width: 100%;
  border-top: 2px solid rgb(73, 53, 134);
  font-family: 윤고딕320;
  font-size: 17px;
  color: #777;
  margin-top: 0;
  padding-top: 1.2rem;
  padding-left: 1.8rem;
  &.end {
    border-bottom: 2px solid rgb(73, 53, 134);
    padding-bottom: 1.2rem;
  }
`;

const ServiceBodyItem = styled.li`
  line-height: 1.6;
`;

export {
  ServiceBodyContainer,
  ServiceBodyRow,
  ServiceBodyCol,
  ServiceBodyList,
  ServiceBodyItem,
};
