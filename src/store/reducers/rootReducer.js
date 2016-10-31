import { combineReducers } from 'redux';
import frontPageSources from './frontPageSources';
import allSources from './pickSource';
import frontPageArticles from './frontPageArticles';

export default combineReducers({
  frontPageSources,
  allSources,
  frontPageArticles
});
