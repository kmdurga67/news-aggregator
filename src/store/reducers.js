import { combineReducers } from 'redux';
import { SET_ARTICLES } from './actions';

const initialState = {
  articles: [],
};

const articlesReducer = (state = initialState.articles, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  articles: articlesReducer,
});
