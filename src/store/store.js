import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import sources from '../sources';
import firebase from 'firebase';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f);

// const getSources = () => {
//   var userId = firebase.auth().currentUser.uid;
//   return firebase.database().ref(userId).once('value').then(function(snapshot) {
//     var username = snapshot.val().username;
//   });
// };

const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null
  },
  allSources: sources,
};

const store = createStore(
  rootReducer,
  initialState,
  enhancers
);

export default store;
