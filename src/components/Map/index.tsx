'use client';

/* eslint-disable simple-import-sort/imports */
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { center, offices } from '@/constants/mapdata';

/* eslint-disable simple-import-sort/imports */

const icon = new Icon({
  iconUrl: '/icons/marker.svg',
  iconAnchor: [10, 20],
});

const Map = () => (
  <MapContainer center={center} zoom={5}>
    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {offices.map(({ geocode, popUp }) => (
      <Marker position={geocode} icon={icon}>
        <Popup>
          <h2>{popUp}</h2>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
