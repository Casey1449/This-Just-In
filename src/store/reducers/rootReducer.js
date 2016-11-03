import { combineReducers } from 'redux';
import pickedSources from './pickedSources';
import allSources from './pickSource';
import frontPageArticles from './frontPageArticles';

export default combineReducers({
  pickedSources,
  allSources,
  frontPageArticles
});
