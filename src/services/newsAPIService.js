import axios from 'axios';
import { news_api } from '../apis/apikeys';
import { NEWS_API_KEY } from '../apis/apis';

export const fetchNewsArticles = async (query) => {
  const response = await axios.get(`${news_api}/everything`, {
    params: {
      q: query,
      apiKey: NEWS_API_KEY,
    },
  });
  return response.data.articles;
};
