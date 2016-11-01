import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Header from "./containers/HeaderContainer";
import Frontpage from "./containers/FrontpageContainer";
import SelectionForm from "./containers/SelectionFormContainer";

ReactDOM.render(
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path='/' component={App} >

        <Route path='/front' component={Frontpage} />
        <Route path='/selectionform' component={SelectionForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
