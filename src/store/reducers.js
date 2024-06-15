import { combineReducers } from 'redux';
import { SET_ARTICLES, SET_PREFERENCES } from './actions';

const initialState = {
  articles: [],
  preferences: {
    sources: [],
    categories: [],
    date: [],
  },
};

const articlesReducer = (state = initialState.articles, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};

const preferencesReducer = (state = initialState.preferences, action) => {
  switch (action.type) {
    case SET_PREFERENCES:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  articles: articlesReducer,
  preferences: preferencesReducer,
});
