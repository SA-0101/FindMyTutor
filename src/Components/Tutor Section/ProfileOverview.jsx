import { useState } from "react";
import { MdPerson } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { MapContainer, TileLayer,Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ProfileOverview() {

    const BASE_URL="http://localhost:8000/tutor"

    const token=localStorage.getItem('token')
    const [img,setImg]=useState("")
    const [teacherName,setTeachername]=useState("")
    const [teacheremail,setTeacheremail]=useState("")
    const [teacherexperiance,setTeacherexperiance]=useState("")
    const [teachercontact,setTeachercontact]=useState("")
    const [teacheraddress,setTeacheraddress]=useState("")
    const [subject,setSubject]=useState("")
    const [lastdegree,setLastdegree]=useState("")
    const [instant,setInstant]=useState("true")
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);


    // ✅ Custom red icon (you can change icon here)
    const locationIcon = new L.Icon({
         iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
          iconSize: [30, 30],
            });

    // Component to capture click and update states
   function LocationHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setLatitude(lat);
        setLongitude(lng);
        console.log("Latitude:", lat, "Longitude:", lng);
      },
    });

    return null;
  }


const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData();

            formData.append("img", img);
            formData.append("teacherName", teacherName);
            formData.append("email", teacheremail);
            formData.append("experiance", teacherexperiance);
            formData.append("contact", teachercontact);
            formData.append("teacherAddress", teacheraddress);
            formData.append("subject", subject);
            formData.append("degree", lastdegree);
            formData.append("location", teacheraddress); {/*The location is actually the address of the Teacher */}
            formData.append("isInstantTutor", instant);
            formData.append("latitude", latitude);
            formData.append("longitude", longitude);

    try {
      const response = await fetch(`${BASE_URL}/updateTeacherProfile`, {
        method: "PUT",
        headers: {
    Authorization: `Bearer ${token}`,
      },
        body: formData,
      });

      const data = await response.json();
      
      if(response.ok){
        alert("Profile Updated successfully")
        console.log(data);
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };
   

  return (
    <div className='w-full flex flex-col gap-4 px-[100px] py-[20px] justify-center items-center'>
            <div className='w-full flex items-center gap-4 px-5 py-3 h-20 shadow p-4 rounded'>
              <MdPerson size={60} className="bg-blue-400 rounded-lg"/>
              <div>
                <h1 className='text-2xl font-semibold'>Profile Management</h1>
                <h1>Update your profile information and preferences</h1>
              </div>

            </div>

            <div className='w-full flex flex-col rounded-lg'>
              
              <div className="bg-blue-500 px-5 py-3 rounded-tr-lg rounded-tl-lg">
                <h1 className='text-2xl font-semibold'>Profile Management</h1>
                <h1>Update your profile information and preferences</h1>
              </div>

              <form action="" onSubmit={handleSubmit} className="w-full flex flex-col px-5 py-5 gap-10 bg-white">
                <div className="w-full flex flex-col gap-8 py-2">
                  <div className="flex flex-col justify-center items-center">
                    <input type="file" name="" id="" onChange={(e) => setImg(e.target.files[0])}/>
                    <label htmlFor="">Select Image From here</label>
                  </div>
             {/* Div for input fields only */}     
             <div className="w-full flex flex-col gap-3">


                <div className="w-full flex gap-5">

                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Full Name</label>
                    <input className="outline-0 border border-black bg-blue-50 rounded-sm px-2 py-2" id="name" type="text" placeholder="Enter Your full name" onChange={(e)=>{setTeachername(e.target.value)}}/>
                  </div>

                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Email Address</label>
                    <input className="outline-0 border border-black bg-blue-50 rounded-sm px-2 py-2" id="name" type="email" placeholder="Enter Your Gmail" onChange={(e)=>{setTeacheremail(e.target.value)}}/>
                  </div>

                </div>

                <div className="w-full flex gap-5">

                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Contact Number</label>
                    <input className="outline-0 border border-black bg-blue-50 rounded-sm px-2 py-2" id="name" type="number" placeholder="Enter Your Contact Number" onChange={(e)=>{setTeachercontact(e.target.value)}}/>
                  </div>

                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Experiance (Years)</label>
                    <input className="outline-0 border border-black bg-blue-50 rounded-sm px-2 py-2" id="name" type="number" placeholder="Enter Your Experiance" onChange={(e)=>{setTeacherexperiance(e.target.value)}}/>
                  </div>

                </div>

                <div className="w-full flex gap-5">

                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Degree/Qualification</label>
                    <input className="outline-0 border border-black bg-blue-50 rounded-sm px-2 py-2" id="name" type="text" placeholder="Enter Your Last Degree" onChange={(e)=>{setLastdegree(e.target.value)}}/>
                  </div>

                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Subject</label>
                    <select className="outline-0 border border-black bg-blue-50 rounded-sm px-2 py-2" name="" id="" value={subject} onChange={(e)=>{setSubject(e.target.value)}}>
                      <option value="" disabled>-- Select Your Subject --</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="English">English</option>
                      <option value="Physics">Physics</option>
                      <option value="History">History</option>
                      <option value="Art and Design">Art and Design</option>
                    </select>
                  </div>

                </div>

            <div className="w-full flex gap-5">

                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Full Address</label>
                    <input className="outline-0 border border-black bg-blue-50 rounded-sm px-2 py-2" id="name" type="text" placeholder="Enter Your full address" onChange={(e)=>{setTeacheraddress(e.target.value)}}/>
            </div>

                </div>

                  </div>
                </div>

                <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <MdLocationOn size={24} color="red" />
                        <h1>Pin Your Exact Location</h1>
                      </div>

                      <div className="outline-0 border bg-blue-50 rounded-sm px-2 py-2">
                        <h1>📍  Click on the map to set your precise location. This helps students find you easily.</h1>
                      </div>

                      {/* Map for Storing coordinates of Teachers */}

                      <div>
                    <h2>Click on map to save your location</h2>

                    <MapContainer
                      center={[ 33.52235, 71.44720]}
                      zoom={15}
                      style={{ height: "400px", width: "100%" }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <LocationHandler />

                      {latitude && longitude && (
                        <Marker
                          position={[latitude, longitude]}
                          icon={locationIcon}
                        />
                      )}
                    </MapContainer>

                    {latitude && longitude && (
                      <div className="mt-4">
                        <p><strong>Latitude:</strong> {latitude}</p>
                        <p><strong>Longitude:</strong> {longitude}</p>
                      </div>
                    )}
                  </div>

                      
                </div>

                <div className="bg-green-200 w-full flex justify-between items-center px-2">
                   
                   <div className="flex justify-between items-center gap-6 px-2 py-2">
                    
                    <HiLightningBolt size={35} color="white" className="bg-green-500 rounded-sm px-2 py-2"/>
                    <div className="flex flex-col">
                      <h1 className="text-lg font-semibold">Instant Tutoring</h1>
                      <h1>Enable immediate tutoring requests</h1>
                    </div>
                      
                   </div>
                   <div className="flex gap-2">
                    <label>
                      <input type="radio" name="role" value="true" checked={instant === "true"} onChange={(e)=>{setInstant(e.target.value)}}/> Yes
                    </label>

                    <label>
                      <input className="bg-blue-400" type="radio" name="role" value="false" checked={instant === "false"} onChange={(e)=>{setInstant(e.target.value)}} /> No
                    </label>
                   </div>

                </div>
                <button className="bg-blue-500 py-2 rounded-lg text-white font-semibold" >Update Profile</button>
              </form>

            </div>
    </div>
  )
}

export default ProfileOverview
