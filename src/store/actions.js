export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_PREFERENCES = 'SET_PREFERENCES';

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  payload: articles,
});

export const setPreferences = (preferences) => ({
  type: SET_PREFERENCES,
  payload: preferences,
});
