import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Red icon for user location
const userIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function NearbyTeachers() {
  const BASE_URL = "http://localhost:8000/tutor";
  const [teachersdata, setTeachersdata] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const token = localStorage.getItem("token");

  const getNearbyTeachers = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `${BASE_URL}/getNearbyTeachers?latitude=${latitude}&longitude=${longitude}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setTeachersdata(data.teachers);
        setUserLocation([latitude, longitude]);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        getNearbyTeachers(latitude, longitude);
      },
      (err) => {
        console.error("Location error:", err);
        getNearbyTeachers(33.56, 71.48); // fallback
      }
    );
  }, []);

  return (
    <div className="h-screen w-full">
      <MapContainer
        center={userLocation || [33.56, 71.48]}
        zoom={10}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {/* Tutor markers with profile image icons */}
        {teachersdata.map((tutor, index) => {
          const coords = tutor.coordinates?.coordinates;
          if (!coords) return null;

          const profilePic =
            tutor.img || "https://via.placeholder.com/50";

          const customIcon = L.divIcon({
            html: `<img src="${profilePic}" class="w-[30px] h-[30px] rounded-full object-cover border-2 border-white shadow-md" />`,
            iconSize: [30, 30],
            className: "",
          });

          return (
            <Marker
              key={index}
              position={[coords[1], coords[0]]}
              icon={customIcon}
            >
              <Popup>
                <div className="flex flex-col items-center text-center min-w-[180px]">
                  <img
                    src={profilePic}
                    alt="Tutor"
                    className="w-20 h-20 rounded-full object-cover mb-2"
                  />
                  <div className="font-semibold">{tutor.teacherName}</div>
                  <div className="text-sm mt-1">🎓 {tutor.subject || "Subject not available"}</div>
                  <div className="text-xs text-gray-600 mt-1">📧 {tutor.email}</div>
                  <div className="text-xs text-gray-600 mt-1">📍 {tutor.location || "Address not provided"}</div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* User location marker */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default NearbyTeachers;
