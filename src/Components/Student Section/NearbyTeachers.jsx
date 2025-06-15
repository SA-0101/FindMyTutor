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

const userIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


function NearbyTeachers() {

      const BASE_URL= "http://localhost:8000/tutor"
      const [teachersdata,setTeachersdata]=useState([])
      const token=localStorage.getItem('token')
      const [userLocation, setUserLocation] = useState(null);
      console.log("User Location:", userLocation);



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

    const responsedata = await response.json();

    if (response.ok) {
      setTeachersdata(responsedata.teachers); // Change key based on API
      console.log(responsedata)
      setUserLocation([latitude, longitude]); // Save for map centering
    } else {
      alert(responsedata.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


    useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      getNearbyTeachers(latitude, longitude);
    },
    (error) => {
      console.error("Error getting location:", error);
      // fallback location
      getNearbyTeachers(33.56, 71.48);
    }
  );
}, []);


 return (
    <div style={{ height: "100vh", width: "100%" }}>
         <MapContainer
           center={userLocation || [33.56, 71.48]}
          zoom={10}
          style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {teachersdata.map((tutor, index) => {
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

          {/*For User Icon showing */}
          {userLocation && (
             <Marker position={userLocation} icon={userIcon}>
             <Popup>You are here</Popup>
            </Marker>
            )}


      </MapContainer>
    </div>
  );
};
export default NearbyTeachers
