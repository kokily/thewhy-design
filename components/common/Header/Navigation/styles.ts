import styled from 'styled-components';
import { media } from '../../../../styles';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${media.medium} {
    width: 100%;
  }
`;

const NavigationMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.medium} {
    width: 100%;
  }
`;

const NavigationMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 15px;
  height: 60px;
  transition: 0.2s all;
  width: 100%;
  max-width: 694.11px;
  svg {
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    &.off {
      background: #6799ff;
      color: white;
    }
    &.on {
      background: white;
      color: #6799ff;
      border: 1px solid #6799ff;
    }
  }
`;

export { NavigationContainer, NavigationMobileWrapper, NavigationMobile };
