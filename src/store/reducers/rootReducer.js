import { combineReducers } from 'redux';
import allSources from './pickSource';
import frontPageArticles from './frontPageArticles';

export default combineReducers({
  allSources,
  frontPageArticles
});
