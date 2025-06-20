import { useEffect, useState } from "react";
import socket from "../../socket";

function TutorMessages() {

  const BASE_URL= "http://localhost:8000/tutor"
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const token=localStorage.getItem('token')

  const senderId = localStorage.getItem("teacherId");
  const senderType = "Teacher";

  const roomId = selectedStudentId && `${selectedStudentId}_${senderId}`;

  useEffect(() => {
    // 🔸 Fetch students from your backend
    fetch(`${BASE_URL}/getAllTeachers`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setStudents(data.students || []));

    // 🔸 Listen for incoming messages
    socket.on("receive_message", (data) => {
      if (data.roomId === roomId) {
        setChat((prev) => [...prev, data]);
      }
    });

    return () => socket.off("receive_message");
  }, [roomId]);

  const sendMessage = () => {
    if (!message.trim() || !selectedStudentId) return;

    const msgData = {
      roomId,
      senderId,
      senderType,
      text: message,
      time: new Date().toLocaleTimeString()
    };

    socket.emit("send_message", msgData);
    setMessage("");
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Teacher Chat</h3>

      <select
        className="border w-full p-2 mb-2"
        value={selectedStudentId}
        onChange={(e) => setSelectedStudentId(e.target.value)}
      >
        <option value="" disabled>Select Student</option>
        {students.map((s) => (
          <option key={s._id} value={s._id}>{s.name}</option>
        ))}
      </select>

      <div className="border h-48 overflow-y-scroll p-2 mb-2">
        {chat.map((msg, index) => (
          <div key={index}>
            <b>{msg.senderType}:</b> {msg.text} <i>({msg.time})</i>
          </div>
        ))}
      </div>

      <input
        className="border p-2 w-full"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white w-full py-2 mt-2"
        onClick={sendMessage}
        disabled={!selectedStudentId}
      >
        Send
      </button>
    </div>
  );
}

export default TutorMessages;
