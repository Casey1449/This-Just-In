import { combineReducers } from 'redux';
import allSources from './pickSource';
import frontPageArticles from './frontPageArticles';
import auth from './auth';

export default combineReducers({
  auth,
  allSources,
  frontPageArticles
});
