import styled, { css } from 'styled-components';
import { media } from '../../../../../styles';

interface CopyrightProps {
  divide: 'logo' | 'copy' | 'link';
}

// Copyright Item Styles
const FooterCopyrightItemContainer = styled.div<CopyrightProps>`
  display: flex;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: flex-start;
  align-items: center;
  ${media.small} {
    display: inline-block;
    flex: none !important;
    max-width: 100% !important;
    margin-bottom: 1.25rem;
  }
  img {
    height: 32px;
  }
  ${(props) =>
    props.divide === 'logo' &&
    css`
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    `}
  ${(props) =>
    props.divide === 'copy' &&
    css`
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
      p {
        font-size: 0.75rem;
        line-height: 26px;
        margin: 0;
        padding: 0;
        color: #555;
        strong {
          color: #c5c5c5;
        }
      }
    `}
  ${(props) =>
    props.divide === 'link' &&
    css`
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
      justify-content: flex-end;
    `}
`;

const FooterCopyrightEtcLink = styled.nav`
  font-size: 12px;
  color: #777;
`;

const EtcLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    position: relative;
    line-height: 12px;
    margin: 0;
    padding: 0 8px;
    margin-right: 1rem;
    svg {
      position: absolute;
      top: 0px;
      left: -6px;
    }
    a {
      transition: 0.12s all;
    }
    a:hover {
      color: white;
    }
  }
`;

export { FooterCopyrightItemContainer, FooterCopyrightEtcLink, EtcLinkList };
