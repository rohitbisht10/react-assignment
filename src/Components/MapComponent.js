import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ latitude, longitude }) => {
  const [mapKey, setMapKey] = useState(Date.now());
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [markerPosition, setMarkerPosition] = useState([0, 0]);

  useEffect(() => {
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (!isNaN(lat) && !isNaN(lng)) {
      setMapCenter([lat, lng]);
      setMarkerPosition([lat, lng]);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    setMapKey(Date.now());
  }, [latitude, longitude]);

  const customIcon = icon({
    iconUrl: "location.png",
    iconSize: [24, 24],
  });

  return (
    <div className="col-lg-6">
      <div style={{ width: "100%", height: "400px" }}>
        <MapContainer
          key={mapKey}
          center={mapCenter}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {latitude && longitude && (
            <Marker position={markerPosition} icon={customIcon}></Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
