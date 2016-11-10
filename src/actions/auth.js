var firebase = require("firebase");
import { browserHistory } from "react-router";

var config = {
  apiKey: "AIzaSyDfp5U4FX_xgZVls-neLDarIIsq8l5pJEw",
  authDomain: "this-just-in-74b5b.firebaseapp.com",
  databaseURL: "https://this-just-in-74b5b.firebaseio.com",
  storageBucket: "this-just-in-74b5b.appspot.com",
  messagingSenderId: "393777810926"
};

firebase.initializeApp(config);

const fbRef = new firebase.auth.GoogleAuthProvider();

const startListeningToAuth = () => {
    return (dispatch, getState) => {
      firebase.auth().onAuthStateChanged(userData => {
        if (userData) {
          dispatch({
            type: 'LOGIN',
            uid: userData.uid,
            username: userData.displayName
          });
        } else {
          if (getState().auth.status !== 'ANONYMOUS'){
            dispatch({
              type: 'LOGOUT'
            });
          }
        }
      });
    };
  };

  const logIn = () => {
    return (dispatch, getState) => {
      dispatch( {
        type: 'ATTEMPTING_LOGIN'
      });
      firebase.auth().signInWithPopup(fbRef)
      .then(result => {
        dispatch({
          type: 'LOGIN',
          uid: result.user.uid,
          username: result.user.displayName
        });
      })
      .then(()=>{
        browserHistory.push('/main');
      })
      .catch(error => {
        console.log('login failed', error);
      });
    };
  };

  const logOut = () => {
    return (dispatch, getState) => {
      dispatch({
        type: 'LOGOUT'
      });
      firebase.auth().signOut()
      .then(() => {
        browserHistory.push('/');
      })
      .catch(error => {
        console.log('logout failed', error);
      });
    };
  };

module.exports = {
  startListeningToAuth,
  logIn,
  logOut
};
