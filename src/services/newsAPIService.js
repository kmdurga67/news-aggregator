import axios from "axios";
import { news_api } from "../apis/apikeys";

export const fetchNewsArticles = async (query) => {
  const newsapikey = process.env.REACT_APP_NEWS_API_KEY;

  try {
    const response = await axios.get(`${news_api}/everything`, {
      params: {
        q: query,
        apiKey: newsapikey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching Guardian articles:", error);
  }
};
