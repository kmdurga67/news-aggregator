import axios from 'axios';
import { new_york_api } from '../apis/apikeys';
import { NEW_YORK_API_KEY } from '../apis/apis';

export const fetchNYTArticles = async (query) => {
  const response = await axios.get(new_york_api, {
    params: {
      q: query,
      'api-key': NEW_YORK_API_KEY,
    },
  });
  return response.data.response.docs;
};
