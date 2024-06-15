import axios from 'axios';
import { GUARDIAN_API_KEY } from '../apis/apis';
import { guardian_api } from '../apis/apikeys';

export const fetchGuardianArticles = async (query) => {
  const response = await axios.get(guardian_api, {
    params: {
      q: query,
      'api-key': GUARDIAN_API_KEY,
    },
  });
  return response.data.response.results;
};
