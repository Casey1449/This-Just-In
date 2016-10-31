import { combineReducers } from 'redux';
import frontPageSources from './frontPageSources';
import pickSource from './pickSource';
import frontPageArticles from './frontPageArticles';

export default combineReducers({
  frontPageSources,
  pickSource,
  frontPageArticles
});
