// // TutorMessages.jsx
// import React, { useEffect, useState } from "react";
// import socket from "./../../socket";

// function TutorMessages() {
//   const [students, setStudents] = useState([]); // fetched from API
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const tutorId = localStorage.getItem("teacherId");
//   console.log(tutorId)

//   useEffect(() => {
//     // Register tutor
//     socket.emit("register", { userId: tutorId, userType: "Teacher" });

//     // Listen for incoming messages
//     socket.on("private_message", ({ senderId, message }) => {
//       setChat((prev) => [...prev, { sender: senderId, message }]);
//     });

//     return () => {
//       socket.off("private_message");
//     };
//   }, []);

//   const sendMessage = () => {
//     if (!message || !selectedStudent) return;

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
//             {s.name}
//           </div>
//         ))}
//       </div>

//       {/* Right side: Chat box */}
//       <div className="flex flex-col w-2/3 p-4">
//         <h2 className="font-bold">Chat with: {selectedStudent?.name || "No one"}</h2>
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

import React, { useEffect, useState } from "react";
import socket from "./../../socket";

function TutorMessages() {

  const BASE_URL="http://localhost:8000/tutor"
  const [students, setStudents] = useState([]);
  console.log(students)
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const tutorId = localStorage.getItem("teacherId");
  const token = localStorage.getItem("token");

  console.log("Tutor ID:", tutorId);

  useEffect(() => {
    // ✅ Register tutor on Socket.IO
    socket.emit("register", { userId: tutorId, userType: "Teacher" });

    // ✅ Socket listener
    socket.on("private_message", ({ senderId, message }) => {
      setChat((prev) => [...prev, { sender: senderId, message }]);
    });

    return () => {
      socket.off("private_message");
    };
  }, [tutorId]);

  // ✅ Fetch all students from backend
  useEffect(() => {
    async function fetchStudents() {
      try {
                        const response = await fetch(`${BASE_URL}/getAllStudents`,{
                          method:"GET",
                          headers:{
                            'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                          }
            
                        });
                        
                        const responsedata = await response.json();
                  
                        if (response.ok) {
            
                          setStudents(responsedata.students);  // Store the fetched data in state
                          console.log(responsedata)

                        }
                        else{
                            alert(responsedata.message)
                        }
            
                      } catch (error) {
                        console.error('Error:', error);
                      }
                    
                  }

    fetchStudents();
  }, [token]);

  const sendMessage = () => {
    if (!message || !selectedStudent) return;

    socket.emit("private_message", {
      senderId: tutorId,
      receiverId: selectedStudent._id,
      message,
    });

    setChat((prev) => [...prev, { sender: tutorId, message }]);
    setMessage("");
  };

  return (
    <div className="flex h-screen">
      {/* Left side: Students list */}
      <div className="w-1/3 border-r p-2 overflow-y-auto">
        <h2 className="font-bold mb-2">Students</h2>
        {students.map((s) => (
          <div
            key={s._id}
            onClick={() => {
              setSelectedStudent(s);
              setChat([]); // optional: clear chat when switching
            }}
            className={`p-2 cursor-pointer ${selectedStudent?._id === s._id ? "bg-gray-200" : ""}`}
          >
            {s.studentName}
          </div>
        ))}
      </div>

      {/* Right side: Chat box */}
      <div className="flex flex-col w-2/3 p-4">
        <h2 className="font-bold">
          Chat with: {selectedStudent?.studentName || "No one"}
        </h2>
        <div className="flex-1 border my-2 p-2 overflow-y-auto bg-white">
          {chat.map((msg, i) => (
            <div key={i} className={`my-1 ${msg.sender === tutorId ? "text-right" : "text-left"}`}>
              <span className="inline-block p-2 bg-blue-100 rounded">{msg.message}</span>
            </div>
          ))}
        </div>

        <div className="flex">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded p-2"
            placeholder="Type message..."
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white px-4 ml-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorMessages;
