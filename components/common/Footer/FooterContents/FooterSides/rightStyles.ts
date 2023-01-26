import styled from 'styled-components';
import { media } from '../../../../../styles';

const RightContainer = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  ${media.small} {
    display: inline-block;
    flex: none;
    max-width: 370px;
  }
`;

const RightTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  line-height: 18px;
  margin: 0 0 14px 0;
  margin-bottom: 0.25rem;
  color: #fff;
  text-align: left;
`;

const RightLead = styled.p`
  color: #777;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  text-align: left;
`;

const RightLinksBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-right: -15px;
  margin-left: -15px;
`;

const RightLayout = styled.div`
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 0;
  margin-top: 1rem;
`;

const RightList = styled.ul`
  margin-top: 0.5rem;
  list-style: none;
  padding-left: 0;
  padding-right: 0;
`;

const RightItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 0.4rem;
  color: #777;
  text-align: left;
  svg {
    position: absolute;
    top: 2px;
    left: 0px;
  }
  a {
    transition: 0.12s all;
  }
  a:hover {
    color: white;
    position: relative;
    left: 5px;
  }
`;

export {
  RightContainer,
  RightTitle,
  RightLead,
  RightLayout,
  RightLinksBox,
  RightList,
  RightItem,
};
