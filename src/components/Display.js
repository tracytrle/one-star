import React from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
export default function Display() {
  const messages = useSelector((state) => state.messages);

  return (
    <Stack>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
    </Stack>
  );
}
