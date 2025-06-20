import React, { useState } from 'react';

function Messages() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const msgData = {
      sender: "Teacher",
      text: message,
      time: new Date().toLocaleTimeString()
    };
    console.log("Sending message:", msgData);
    setMessage(""); // clear input
  };

  return (
    <div>
      <input 
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Messages;
