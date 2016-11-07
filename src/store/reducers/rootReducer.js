import { combineReducers } from 'redux';
import allSources from './pickSource';
import frontPageArticles from './frontPageArticles';
import auth from './auth';
import userSources from './userSources';

export default combineReducers({
  auth,
  userSources,
  allSources,
  frontPageArticles
});
