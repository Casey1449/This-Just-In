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

        <Route path='/main' component={Frontpage} page={'main'}/>
        <Route path='/SelectionPage' component={SelectionPage} />
        <Route path='/sports' component={Frontpage} page={'sports'}/>
        <Route path='/business' component={Frontpage} page={'business'}/>
        <Route path='/tech' component={Frontpage} page={'tech'}/>
        <Route path='/world' component={Frontpage} page={'world'}/>
        <Route path='/culture' component={Frontpage} page={'culture'}/>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
