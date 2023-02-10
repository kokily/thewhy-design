import styled from 'styled-components';
import { media } from '../../../styles';

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoticeLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

const NoticeDateBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  h4 {
    color: #777;
  }
`;

export { NoticeContainer, NoticeLayout, NoticeDateBox };
