import React, { useState } from "react";
import { connect } from "react-redux";

import { userMessage } from "../../actions/watson";

const Chat = ({ chat, userMessage }) => {
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
      const code = e.keyCode || e.which;

      if (code === 13) {
        console.log(message);
        userMessage(message);
        setMessage("");
      }
  }

  return (
    <div className="chat">
      <h1>SottoCapo</h1>

      {chat.length === 0 ? "" : chat.map((msg) => 
        <div className={msg.type}>{msg.message}</div>
      )}

      <input
        id="chatBox"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
      ></input>
    </div>
  );
};

const msp = state => ({
  chat: state.watson.messages
})

export default connect(msp, {userMessage})(Chat);