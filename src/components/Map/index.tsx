'use client';

import { Icon, LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { center, offices } from '@/constants/mapdata';

const icon = new Icon({
  iconUrl: '/icons/marker.svg',
  iconAnchor: [10, 20],
});

const Map = () => (
  <MapContainer center={center as LatLngExpression} zoom={5}>
    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {offices.map(({ geocode, popUp }) => (
      <Marker position={geocode as LatLngExpression} icon={icon} key={popUp}>
        <Popup>
          <h2>{popUp}</h2>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
