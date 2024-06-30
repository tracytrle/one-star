import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";

export default function Display() {
  const messages = useSelector((state) => state.messages);

  return (
    <Box
      sx={{
        height: "600px", // Fixed height for the container
        overflowY: "auto", // Enable vertical scrolling
      }}
    >
      <Stack>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              backgroundColor: msg.sender === "user" ? "#d1e7dd" : "#f8d7da",
              marginLeft: msg.sender === "user" ? "auto" : "5",
              marginRight: msg.sender === "user" ? "0" : "auto",
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "60%",
              marginBottom: "10px",
            }}
          >
            {msg.text}
          </div>
        ))}
      </Stack>
    </Box>
  );
}
