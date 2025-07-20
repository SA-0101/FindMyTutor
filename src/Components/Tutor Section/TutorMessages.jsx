// // // TutorMessages.jsx
// // import React, { useEffect, useState } from "react";
// // import socket from "./../../socket";

// // function TutorMessages() {
// //   const [students, setStudents] = useState([]); // fetched from API
// //   const [selectedStudent, setSelectedStudent] = useState(null);
// //   const [message, setMessage] = useState("");
// //   const [chat, setChat] = useState([]);

// //   const tutorId = localStorage.getItem("teacherId");
// //   console.log(tutorId)

// //   useEffect(() => {
// //     // Register tutor
// //     socket.emit("register", { userId: tutorId, userType: "Teacher" });

// //     // Listen for incoming messages
// //     socket.on("private_message", ({ senderId, message }) => {
// //       setChat((prev) => [...prev, { sender: senderId, message }]);
// //     });

// //     return () => {
// //       socket.off("private_message");
// //     };
// //   }, []);

// //   const sendMessage = () => {
// //     if (!message || !selectedStudent) return;

// //     socket.emit("private_message", {
// //       senderId: tutorId,
// //       receiverId: selectedStudent._id,
// //       message,
// //     });

// //     setChat((prev) => [...prev, { sender: tutorId, message }]);
// //     setMessage("");
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       {/* Left side: Students list */}
// //       <div className="w-1/3 border-r p-2 overflow-y-auto">
// //         <h2 className="font-bold mb-2">Students</h2>
// //         {students.map((s) => (
// //           <div
// //             key={s._id}
// //             onClick={() => {
// //               setSelectedStudent(s);
// //               setChat([]); // optional: clear chat when switching
// //             }}
// //             className={`p-2 cursor-pointer ${selectedStudent?._id === s._id ? "bg-gray-200" : ""}`}
// //           >
// //             {s.name}
// //           </div>
// //         ))}
// //       </div>

// //       {/* Right side: Chat box */}
// //       <div className="flex flex-col w-2/3 p-4">
// //         <h2 className="font-bold">Chat with: {selectedStudent?.name || "No one"}</h2>
// //         <div className="flex-1 border my-2 p-2 overflow-y-auto bg-white">
// //           {chat.map((msg, i) => (
// //             <div key={i} className={`my-1 ${msg.sender === tutorId ? "text-right" : "text-left"}`}>
// //               <span className="inline-block p-2 bg-blue-100 rounded">{msg.message}</span>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="flex">
// //           <input
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             className="flex-1 border rounded p-2"
// //             placeholder="Type message..."
// //           />
// //           <button onClick={sendMessage} className="bg-blue-500 text-white px-4 ml-2 rounded">
// //             Send
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default TutorMessages;

// import React, { useEffect, useState } from "react";
// import socket from "./../../socket";

// function TutorMessages() {

//   const BASE_URL="http://localhost:8000/tutor"
//   const [students, setStudents] = useState([]);
//   console.log(students)
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const tutorId = localStorage.getItem("teacherId");
//   const token = localStorage.getItem("token");

//   console.log("Tutor ID:", tutorId);

//   useEffect(() => {
//     // ✅ Register tutor on Socket.IO
//     socket.emit("register", { userId: tutorId, userType: "Teacher" });

//     // ✅ Socket listener
//     socket.on("private_message", ({ senderId, message }) => {
//       setChat((prev) => [...prev, { sender: senderId, message }]);
//     });

//     return () => {
//       socket.off("private_message");
//     };
//   }, [tutorId]);

//   // ✅ Fetch all students from backend
//   useEffect(() => {
//     async function fetchStudents() {
//       try {
//                         const response = await fetch(`${BASE_URL}/getAllStudents`,{
//                           method:"GET",
//                           headers:{
//                             'Content-Type': 'application/json',
//                                 'Authorization': `Bearer ${token}`
//                           }
            
//                         });
                        
//                         const responsedata = await response.json();
                  
//                         if (response.ok) {
            
//                           setStudents(responsedata.students);  // Store the fetched data in state
//                           console.log(responsedata)

//                         }
//                         else{
//                             alert(responsedata.message)
//                         }
            
//                       } catch (error) {
//                         console.error('Error:', error);
//                       }
                    
//                   }

//     fetchStudents();
//   }, [token]);

//   const sendMessage = () => {
//     if (!message || !selectedStudent) return;
//     console.log("📤 Sending message:", message, "to:", selectedStudent._id);

//     socket.emit("private_message", {
//       senderId: tutorId,
//       receiverId: selectedStudent._id,
//       message,
//     });

//     setChat((prev) => [...prev, { sender: tutorId, message }]);
//     setMessage("");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left side: Students list */}
//       <div className="w-1/3 border-r p-2 overflow-y-auto">
//         <h2 className="font-bold mb-2">Students</h2>
//         {students.map((s) => (
//           <div
//             key={s._id}
//             onClick={() => {
//               setSelectedStudent(s);
//               setChat([]); // optional: clear chat when switching
//             }}
//             className={`p-2 cursor-pointer ${selectedStudent?._id === s._id ? "bg-gray-200" : ""}`}
//           >
//             {s.studentName}
//           </div>
//         ))}
//       </div>

//       {/* Right side: Chat box */}
//       <div className="flex flex-col w-2/3 p-4">
//         <h2 className="font-bold">
//           Chat with: {selectedStudent?.studentName || "No one"}
//         </h2>
//         <div className="flex-1 border my-2 p-2 overflow-y-auto bg-white">
//           {chat.map((msg, i) => (
//             <div key={i} className={`my-1 ${msg.sender === tutorId ? "text-right" : "text-left"}`}>
//               <span className="inline-block p-2 bg-blue-100 rounded">{msg.message}</span>
//             </div>
//           ))}
//         </div>

//         <div className="flex">
//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="flex-1 border rounded p-2"
//             placeholder="Type message..."
//           />
//           <button onClick={sendMessage} className="bg-blue-500 text-white px-4 ml-2 rounded">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TutorMessages;


// import React, { useEffect, useState } from "react";
// import socket from "./../../socket";

// function TutorMessages() {
//   const BASE_URL = "http://localhost:8000/tutor";
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const tutorId = localStorage.getItem("teacherId");
//   const token = localStorage.getItem("token");

//   console.log("🧑‍🏫 Tutor ID:", tutorId);

//   // ✅ Register socket and listen
//   useEffect(() => {
//     if (!tutorId) return;

//     socket.emit("register", { userId: tutorId });

//     socket.on("private_message", ({ senderId, message }) => {
//       console.log("📥 Message received from:", senderId, "=>", message);
//       setChat((prev) => [...prev, { sender: senderId, message }]);
//     });

//     return () => {
//       socket.off("private_message");
//     };
//   }, [tutorId]);

//   // ✅ Fetch students
//   useEffect(() => {
//     async function fetchStudents() {
//       try {
//         const response = await fetch(`${BASE_URL}/getAllStudents`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const responsedata = await response.json();

//         if (response.ok) {
//           console.log("🎓 Students:", responsedata.students);
//           setStudents(responsedata.students || []);
//         } else {
//           alert(responsedata.message);
//         }
//       } catch (error) {
//         console.error("❌ Fetch error:", error);
//       }
//     }

//     fetchStudents();
//   }, [token]);

//   // ✅ Send message
//   const sendMessage = () => {
//     if (!message || !selectedStudent) return;

//     console.log("📤 Sending message:", message, "to:", selectedStudent._id);

//     socket.emit("private_message", {
//       senderId: tutorId,
//       receiverId: selectedStudent._id,
//       message,
//     });

//     setChat((prev) => [...prev, { sender: tutorId, message }]);
//     setMessage("");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left: Student list */}
//       <div className="w-1/3 border-r p-2 overflow-y-auto">
//         <h2 className="font-bold mb-2">Students</h2>
//         {students.map((s) => (
//           <div
//             key={s._id}
//             onClick={() => {
//               setSelectedStudent(s);
//               setChat([]); // optional
//             }}
//             className={`p-2 cursor-pointer ${
//               selectedStudent?._id === s._id ? "bg-gray-200" : ""
//             }`}
//           >
//             {s.studentName || s.name || "Unnamed Student"}
//           </div>
//         ))}
//       </div>

//       {/* Right: Chat */}
//       <div className="flex flex-col w-2/3 p-4">
//         <h2 className="font-bold">
//           Chat with: {selectedStudent?.studentName || "No one selected"}
//         </h2>

//         <div className="flex-1 border my-2 p-2 overflow-y-auto bg-white">
//           {chat.map((msg, i) => (
//             <div
//               key={i}
//               className={`my-1 ${
//                 msg.sender === tutorId ? "text-right" : "text-left"
//               }`}
//             >
//               <span className="inline-block p-2 bg-blue-100 rounded">
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
//             placeholder="Type message..."
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-blue-500 text-white px-4 ml-2 rounded"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TutorMessages;


import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function TutorMessages() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch students using fetch API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/tutor/getAllStudents",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();
        setStudents(data.students || []);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    (student.studentName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-h-screen overflow-y-auto w-[78%] flex h-screen scroll-auto   ">
      {/* Sidebar */}
      <div className=" max-h-screen p-5  w-[50%] flex flex-col overflow-y-auto">
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
          {filteredStudents.map((student) => (
            <div
              key={student._id}
              className="flex hover:bg-gray-100 hover:scale-95 transition-all cursor-pointer items-center gap-3 text-black rounded-lg p-2"
              onClick={() => navigate(`tutor-chat/${student._id}`)}
            >
              <img
                src={
                  student.img
                    ? `http://localhost:8000/${student.img}`
                    : "profile.png"
                }
                alt={student.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[10px] text-gray-500">ID: {student._id}</p>
                <p className="font-medium">{student.studentName}</p>
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

export default TutorMessages;
