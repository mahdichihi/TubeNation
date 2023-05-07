import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    if (data && data.items && data.items.length > 0) {
      return data;
    } else {
      throw new Error("No data available from API.");
    }
  } catch (error) {
    console.error(error);
    alert("Sorry! An error occurred while fetching data from the API.");
    throw error;
  }
};
