import { useState, useEffect } from "react";
import socket from '../../socket';

function StudentMessages() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data) setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  useEffect(() => {
    const chatBox = document.getElementById("chatBox");
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, [chat]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      sender: "Student",
      text: message,
      time: new Date().toLocaleTimeString()
    };
    socket.emit("send_message", msgData);
    setMessage("");
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Student Chat</h3>
      <div id="chatBox" className="border h-40 overflow-y-scroll p-2 mb-2">
        {chat.map((msg, index) => (
          <div key={index}>
            <b>{msg.sender}:</b> {msg.text} <i>({msg.time})</i>
          </div>
        ))}
      </div>
      <input
        className="border p-1 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message..."
      />
      <button
        className="bg-green-500 text-white px-4 py-1 mt-2 w-full"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default StudentMessages;
