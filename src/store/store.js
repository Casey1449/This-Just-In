import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import sources from '../sources';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f);

const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null
  },
  allSources: sources
};

const store = createStore(
  rootReducer,
  initialState,
  enhancers
);

export default store;
