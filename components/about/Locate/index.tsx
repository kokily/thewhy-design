import type { Ref } from 'react';
import { LocateContainer, MapContainer, MapPane } from './styles';

interface Props {
  kakaoMap: Ref<HTMLDivElement>;
}

export default function Locate({ kakaoMap }: Props) {
  return (
    <LocateContainer>
      <MapContainer>
        <MapPane className="map" ref={kakaoMap} />
      </MapContainer>
    </LocateContainer>
  );
}
