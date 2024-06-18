import axios from "axios";
import { new_york_api } from "../apis/apikeys";

export const fetchNYTArticles = async (query) => {
  const nytapikey = process.env.REACT_APP_NEW_YORK_API_KEY;

  try {
    const response = await axios.get(new_york_api, {
      params: {
        q: query,
        "api-key": nytapikey,
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching Guardian articles:", error);
  }
};
