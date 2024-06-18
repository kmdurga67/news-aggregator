import axios from "axios";
import { guardian_api } from "../apis/apikeys";

export const fetchGuardianArticles = async (query) => {
  const guardianapikey = process.env.REACT_APP_GUARDIAN_API_KEY;

  try {
    const response = await axios.get(guardian_api, {
      params: {
        q: query,
        "api-key": guardianapikey,
      },
    });
    return response.data.response.results;
  } catch (error) {
    console.log("Error fetching Guardian articles:", error);
  }
};
