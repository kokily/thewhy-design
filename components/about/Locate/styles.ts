import styled from 'styled-components';
import { media } from '../../../styles';

const LocateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.small} {
    max-width: 100%;
  }
`;

const MapPane = styled.div`
  width: 100%;
  height: 100%;
`;

export { LocateContainer, MapContainer, MapPane };
