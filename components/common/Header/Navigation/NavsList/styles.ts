import styled, { css } from 'styled-components';
import { media } from '../../../../../styles';
import { Props } from './index';

const NavsListContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.medium} {
    max-height: 50vh;
    overflow: hidden;
    overflow-y: auto;
    padding: 0px;
    padding-left: 0;
    margin-bottom: 0;
    transition: ease all 500ms fadeIn;
    flex-wrap: wrap;
    display: none;
    animation-name: fadeIn;
    animation-duration: 0.4s;
    ${(props) =>
      props.toggle &&
      css`
        display: flex;
      `};
  }
`;

const NavsListList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 694.11px;
  list-style: none;
  ${media.medium} {
    padding: 0 15px;
    margin: 0;
    flex-direction: column;
  }
`;

export { NavsListContainer, NavsListList };
