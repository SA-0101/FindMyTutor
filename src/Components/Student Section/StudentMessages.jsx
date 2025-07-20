// import React, { useEffect, useState } from "react";
// import socket from "./../../socket"; // import your socket instance

// function StudentMessages() {

//   const BASE_URL="http://localhost:8000/tutor"
//   const [teachers, setTeachers] = useState([]); // fetched from API
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   console.log(teachers)
//   const studentId = localStorage.getItem("studentId");
//   const token=localStorage.getItem('token')
//   console.log(studentId)

//   useEffect(() => {
//     // Register student on Socket.IO server
//     socket.emit("register", { userId: studentId, userType: "Student" });

//     // Listen for incoming messages
//     socket.on("private_message", ({ senderId, message }) => {
//       setChat((prev) => [...prev, { sender: senderId, message }]);
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.off("private_message");
//     };
//   }, []);

//   // Mock API call — replace with actual fetch
//   useEffect(() => {
//     async function fetchTeachers() {
//       try {
//                         const response = await fetch(`${BASE_URL}/getAllTeachers`,{
//                           method:"GET",
//                           headers:{
//                             'Content-Type': 'application/json',
//                                 'Authorization': `Bearer ${token}`
//                           }
            
//                         });
                        
//                         const responsedata = await response.json();
                  
//                         if (response.ok) {
            
//                           setTeachers(responsedata.teachers);  // Store the fetched data in state
            
//                         }
//                         else{
//                             alert(responsedata.message)
//                         }
            
//                       } catch (error) {
//                         console.error('Error:', error);
//                       }
//     }

//     fetchTeachers();
//   }, []);

//   const sendMessage = () => {
//     if (!message || !selectedTeacher) return;
//      console.log("📤 Sending message:", message, "to:", selectedTeacher._id);
//     socket.emit("private_message", {
//       senderId: studentId,
//       receiverId: selectedTeacher._id,
//       message,
//     });

//     setChat((prev) => [...prev, { sender: studentId, message }]);
//     setMessage("");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left: Teacher list */}
//       <div className="w-1/3 border-r p-2 overflow-y-auto">
//         <h2 className="font-bold mb-2">Teachers</h2>
//         {teachers.map((t) => (
//           <div
//             key={t._id}
//             onClick={() => {
//               setSelectedTeacher(t);
//               setChat([]); // Clear or load previous chat
//             }}
//             className={`p-2 cursor-pointer ${selectedTeacher?._id === t._id ? "bg-gray-200" : ""}`}
//           >
//             {t.teacherName}
//           </div>
//         ))}
//       </div>

//       {/* Right: Chat window */}
//       <div className="flex flex-col w-2/3 p-4">
//         <h2 className="font-bold">
//           Chat with: {selectedTeacher?.teacherName || "No teacher selected"}
//         </h2>

//         <div className="flex-1 border my-2 p-2 overflow-y-auto bg-white">
//           {chat.map((msg, index) => (
//             <div
//               key={index}
//               className={`my-1 ${msg.sender === studentId ? "text-right" : "text-left"}`}
//             >
//               <span className="inline-block p-2 bg-green-100 rounded">
//                 {msg.message}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="flex">
//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="flex-1 border rounded p-2"
//             placeholder="Type your message..."
//           />
//           <button onClick={sendMessage} className="bg-green-500 text-white px-4 ml-2 rounded">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentMessages;

// import React, { useEffect, useState } from "react";
// import socket from "./../../socket"; // Import your socket instance

// function StudentMessages() {
//   const BASE_URL = "http://localhost:8000/tutor";
//   const [teachers, setTeachers] = useState([]);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const studentId = localStorage.getItem("studentId");
//   const token = localStorage.getItem("token");

//   console.log("📚 Student ID:", studentId);

//   // ✅ Register student socket and listen for incoming messages
//   useEffect(() => {
//     socket.emit("register", { userId: studentId }); // Simplified, userType not needed unless used on backend

//     socket.on("private_message", ({ senderId, message }) => {
//       console.log("📥 Received from:", senderId, "=>", message);
//       setChat((prev) => [...prev, { sender: senderId, message }]);
//     });

//     return () => {
//       socket.off("private_message");
//     };
//   }, [studentId]);

//   // ✅ Fetch all teachers from API
//   useEffect(() => {
//     async function fetchTeachers() {
//       try {
//         const response = await fetch(`${BASE_URL}/getAllTeachers`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const responsedata = await response.json();

//         if (response.ok) {
//           console.log("👨‍🏫 Teachers fetched:", responsedata.teachers);
//           setTeachers(responsedata.teachers || []);
//         } else {
//           alert(responsedata.message);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching teachers:", error);
//       }
//     }

//     fetchTeachers();
//   }, [token]);

//   // ✅ Send message
//   const sendMessage = () => {
//     if (!message || !selectedTeacher) return;

//     console.log("📤 Sending message:", message, "to:", selectedTeacher._id);

//     socket.emit("private_message", {
//       senderId: studentId,
//       receiverId: selectedTeacher._id,
//       message,
//     });

//     setChat((prev) => [...prev, { sender: studentId, message }]);
//     setMessage("");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left: Teacher list */}
//       <div className="w-1/3 border-r p-2 overflow-y-auto">
//         <h2 className="font-bold mb-2">Teachers</h2>
//         {teachers.map((t) => (
//           <div
//             key={t._id}
//             onClick={() => {
//               setSelectedTeacher(t);
//               setChat([]); // optional: clear previous chat
//             }}
//             className={`p-2 cursor-pointer ${
//               selectedTeacher?._id === t._id ? "bg-gray-200" : ""
//             }`}
//           >
//             {t.teacherName || t.name || "Unnamed Teacher"}
//           </div>
//         ))}
//       </div>

//       {/* Right: Chat window */}
//       <div className="flex flex-col w-2/3 p-4">
//         <h2 className="font-bold">
//           Chat with: {selectedTeacher?.teacherName || "No teacher selected"}
//         </h2>

//         <div className="flex-1 border my-2 p-2 overflow-y-auto bg-white">
//           {chat.map((msg, index) => (
//             <div
//               key={index}
//               className={`my-1 ${
//                 msg.sender === studentId ? "text-right" : "text-left"
//               }`}
//             >
//               <span className="inline-block p-2 bg-green-100 rounded">
//                 {msg.message}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="flex">
//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="flex-1 border rounded p-2"
//             placeholder="Type your message..."
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-green-500 text-white px-4 ml-2 rounded"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentMessages;


import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function StudentMessages() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
   

  // Fetch students using fetch API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/tutor/getRegisteredTeachers",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Teachers");
        }

        const data = await response.json();
        setTeachers(data.registeredTeachers || []);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  // Filter students based on search term
  const filteredTeachers = teachers.filter((teacher) =>
    (teacher.teacherName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-[78%] flex max-h-screen overflow-y-auto  bg-gray-100 ">
      {/* Sidebar */}
      <div className=" w-[50%] bg-white   p-5   flex flex-col overflow-y-auto">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Student"
          className="px-3 bg-gray-100 text-black text-sm rounded-full py-2 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Students List */}
        <div className="space-y-3">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher._id}
              className="flex hover:bg-gray-100 hover:scale-95 transition-all cursor-pointer items-center gap-3 text-black rounded-lg p-2"
              onClick={() => navigate(`student-chat/${teacher._id}`)}
            >
              <img
                src={
                  teacher.img
                    ? `http://localhost:8000/${teacher.img}`
                    : "profile.png"
                }
                alt={teacher.teacherName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[10px] text-gray-500">ID: {teacher._id}</p>
                <p className="font-medium">{teacher.teacherName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentMessages;
