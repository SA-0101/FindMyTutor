import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS

// ✅ Fix the default marker icon (do this ONCE)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function NearbyTeachers() {

      const BASE_URL= "http://localhost:8000/tutor"
      const [teachersdata,setTeachersdata]=useState([])
      const token=localStorage.getItem('token')


 return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[33.56, 71.48]} // Default center
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {tutors.map((tutor, index) => {
          const coords = tutor.coordinates?.coordinates;
          if (!coords) return null;

          return (
            <Marker
              key={index}
              position={[coords[1], coords[0]]} // [latitude, longitude]
            >
              <Popup>
                <strong>{tutor.teacherName}</strong><br />
                {tutor.email}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default NearbyTeachers
