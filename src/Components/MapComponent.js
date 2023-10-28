import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ latitude, longitude }) => {
  const [mapKey, setMapKey] = useState(Date.now());
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    let lat = parseFloat(latitude);
    let lng = parseFloat(longitude);

    if ((lat) && (lng)) {
      setMarkers(prevMarkers => [...prevMarkers, [lat, lng]]);
      setMapKey(Date.now());
    }
  }, [latitude, longitude]);

  const customIcon = icon({
    iconUrl: "location.png",
    iconSize: [24, 24],
  });

  let center = [0, 0]; // Default center

  if (markers.length > 0) {
    center = markers[markers.length - 1]; // Set center to the last added marker
  }

  return (
    <div className="col-lg-6">
      <div style={{ width: "100%", height: "400px" }}>
        <MapContainer
          key={mapKey}
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((position, index) => (
            <Marker
              key={index}
              position={position}
              icon={customIcon}
            ></Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
