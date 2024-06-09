import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_URL } from "../api/config";

function WelcomeMessage() {
  useEffect(() => {
    console.log("BACKEND_URL:", BACKEND_URL);
    console.log(process.env.NODE_ENV);
  }, []);

  const { isLoading, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_URL}/api/data`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return <div>{data.message}</div>;
}

export default WelcomeMessage;
