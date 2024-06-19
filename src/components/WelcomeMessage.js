import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../api/config";

function WelcomeMessage({ searchText }) {
  const [label, setLabel] = useState("");
  const [score, setScore] = useState("");
  useEffect(() => {
    console.log("BACKEND_URL:", BACKEND_URL);
    console.log(process.env.NODE_ENV);
  }, []);

  const { isLoading, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_URL}api/distilbert`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      return responseData;
    },
  });

  useEffect(() => {
    console.log("data:", data);
    if (data && data.length > 0) {
      console.log("TRUE:", data[0].label);
      setLabel(data[0].label);
      setScore(data[0].score);
    }
  }, [data]);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {label}: {score}
    </div>
  );
}

export default WelcomeMessage;
