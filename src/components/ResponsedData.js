import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

function ResponsedData() {
  // const [messages, setMessages] = useState([]);

  // const [input, setInput] = useState("");

  // const addMessage = (text, sender) => {
  //   setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  // };
  // useEffect(() => {
  //   console.log("messages:", messages);
  //   // setMessages((prevMessages) => [...prevMessages, messages]);
  //   addMessage(messages, "user");
  // }, [messages]);
  return (
    <Stack>
      {/* <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div> */}
      Response Data
    </Stack>
  );
}

export default ResponsedData;
