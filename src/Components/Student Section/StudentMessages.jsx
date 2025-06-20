import { useEffect, useState } from "react";
import socket from "../../socket";

function StudentMessages() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState("");

  const senderId = localStorage.getItem("studentId");
  const senderType = "Student";

  const roomId = selectedTeacherId && `${senderId}_${selectedTeacherId}`;

  useEffect(() => {
    // 🔸 Fetch teachers
    fetch("http://localhost:8000/student/getAllTeachers", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setTeachers(data.teachers || []));

    // 🔸 Listen for messages
    socket.on("receive_message", (data) => {
      if (data.roomId === roomId) {
        setChat((prev) => [...prev, data]);
      }
    });

    return () => socket.off("receive_message");
  }, [roomId]);

  const sendMessage = () => {
    if (!message.trim() || !selectedTeacherId) return;

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
      <h3 className="text-xl font-bold mb-2">Student Chat</h3>

      <select
        className="border w-full p-2 mb-2"
        value={selectedTeacherId}
        onChange={(e) => setSelectedTeacherId(e.target.value)}
      >
        <option value="" disabled>Select Teacher</option>
        {teachers.map((t) => (
          <option key={t._id} value={t._id}>{t.name}</option>
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
        className="bg-green-600 text-white w-full py-2 mt-2"
        onClick={sendMessage}
        disabled={!selectedTeacherId}
      >
        Send
      </button>
    </div>
  );
}

export default StudentMessages;
