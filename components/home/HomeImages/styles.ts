import styled from 'styled-components';
import { media } from '../../../styles';

const HomeImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const HomeImagesImageBox = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1110px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export { HomeImagesContainer, HomeImagesImageBox };
