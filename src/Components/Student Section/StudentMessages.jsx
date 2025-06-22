import React, { useEffect, useState } from "react";
import socket from "./../../socket"; // import your socket instance

function StudentMessages() {

  const BASE_URL="http://localhost:8000/tutor"
  const [teachers, setTeachers] = useState([]); // fetched from API
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  console.log(teachers)
  const studentId = localStorage.getItem("studentId");
  const token=localStorage.getItem('token')
  console.log(studentId)

  useEffect(() => {
    // Register student on Socket.IO server
    socket.emit("register", { userId: studentId, userType: "student" });

    // Listen for incoming messages
    socket.on("private_message", ({ senderId, message }) => {
      setChat((prev) => [...prev, { sender: senderId, message }]);
    });

    // Cleanup on unmount
    return () => {
      socket.off("private_message");
    };
  }, []);

  // Mock API call — replace with actual fetch
  useEffect(() => {
    async function fetchTeachers() {
      try {
                        const response = await fetch(`${BASE_URL}/getAllTeachers`,{
                          method:"GET",
                          headers:{
                            'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                          }
            
                        });
                        
                        const responsedata = await response.json();
                  
                        if (response.ok) {
            
                          setTeachers(responsedata.teachers);  // Store the fetched data in state
            
                        }
                        else{
                            alert(responsedata.message)
                        }
            
                      } catch (error) {
                        console.error('Error:', error);
                      }
    }

    fetchTeachers();
  }, []);

  const sendMessage = () => {
    if (!message || !selectedTeacher) return;

    socket.emit("private_message", {
      senderId: studentId,
      receiverId: selectedTeacher._id,
      message,
    });

    setChat((prev) => [...prev, { sender: studentId, message }]);
    setMessage("");
  };

  return (
    <div className="flex h-screen">
      {/* Left: Teacher list */}
      <div className="w-1/3 border-r p-2 overflow-y-auto">
        <h2 className="font-bold mb-2">Teachers</h2>
        {teachers.map((t) => (
          <div
            key={t._id}
            onClick={() => {
              setSelectedTeacher(t);
              setChat([]); // Clear or load previous chat
            }}
            className={`p-2 cursor-pointer ${selectedTeacher?._id === t._id ? "bg-gray-200" : ""}`}
          >
            {t.teacherName}
          </div>
        ))}
      </div>

      {/* Right: Chat window */}
      <div className="flex flex-col w-2/3 p-4">
        <h2 className="font-bold">
          Chat with: {selectedTeacher?.teacherName || "No teacher selected"}
        </h2>

        <div className="flex-1 border my-2 p-2 overflow-y-auto bg-white">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`my-1 ${msg.sender === studentId ? "text-right" : "text-left"}`}
            >
              <span className="inline-block p-2 bg-green-100 rounded">
                {msg.message}
              </span>
            </div>
          ))}
        </div>

        <div className="flex">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded p-2"
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} className="bg-green-500 text-white px-4 ml-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentMessages;
