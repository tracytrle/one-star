import { BACKEND_URL } from "../api/config";

const getResponse = async (searchInput) => {
  console.log("searchInput: " + searchInput);
  console.log("URL: " + `${BACKEND_URL}api/distilbert?input=${searchInput}`);
  const response = await fetch(
    `${BACKEND_URL}api/distilbert?input=${searchInput}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const responseData = await response.json();

  if (responseData.length > 0) {
    return responseData[0].label + ": " + responseData[0].score;
  } else {
    throw new Error("Response data is empty");
  }
};

export default getResponse;
