import { combineReducers } from 'redux';
import getFrontPage from './getFrontPage';
import pickSource from './pickSource';

export default combineReducers({
  getFrontPage,
  pickSource
});
