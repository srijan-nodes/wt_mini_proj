import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapVisualization = () => {
  const [location, setLocation] = useState([51.505, -0.09]);

  return (
    <div className="container">
      <h1>Map Visualization</h1>
      <MapContainer center={location} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>Current Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapVisualization;
