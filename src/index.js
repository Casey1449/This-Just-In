import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Header from "./containers/HeaderContainer";
import Frontpage from "./containers/FrontpageContainer";
import SelectionPage from "./containers/SelectionPageContainer";

ReactDOM.render(
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path='/' component={App} >

        <Route path='/main' component={Frontpage} />
        <Route path='/SelectionPage' component={SelectionPage} />
        <Route path='/sports' component={Frontpage} />
        <Route path='/business' component={Frontpage} />
        <Route path='/tech' component={Frontpage} />
        <Route path='/world' component={Frontpage} />
        <Route path='/culture' component={Frontpage} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
