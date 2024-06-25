import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import getResponse from "./getResponse";

import DirectionsIcon from "@mui/icons-material/Directions";

export default function TextFieldBase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    addMessage(event.target.value, "user");
  };

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  // useEffect(() => {
  //   console.log("messages:", messages);
  //   // setMessages((prevMessages) => [...prevMessages, messages]);
  //   getResponse(searchTerm).then((response) => {
  //     addMessage(response, "bot");
  //   });
  // }, [searchTerm, messages]);

  useEffect(() => {
    console.log("searchTerm:", searchTerm);
    console.log("messages:", messages);
  }, [searchTerm, messages]);

  return (
    <Paper
      data-testid="text-field-base-component"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        height: "75px",
        bgcolor: "lightyellow",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Message"
        inputProps={{ "aria-label": "Message" }}
        onChange={handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="third" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
