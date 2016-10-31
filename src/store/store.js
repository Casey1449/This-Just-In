import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import initialState from './initial-state';


const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(
  rootReducer,
  enhancers);

export default store;
