import React, { useState } from "react";

const Chat = ({ chat, userMessage, sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
      const code = e.keyCode || e.which;

      if (code === 13) {
        console.log(message);
        setMessage("");
      }
  }

  return (
    <div className="chat">
      <h1>SottoCapo</h1>
      <input
        id="chatBox"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
      ></input>
    </div>
  );
};

export default Chat;