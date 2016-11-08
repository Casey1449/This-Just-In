import { combineReducers } from 'redux';
import allSources from './pickSource';
import frontPageArticles from './frontPageArticles';
import auth from './auth';
import userSources from './userSources';

const appReducer = combineReducers({
  auth,
  userSources,
  allSources,
  frontPageArticles
});

function rootReducer(state, action){
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
