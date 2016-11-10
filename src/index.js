import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/SignIn';
import './styles/index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Section from './containers/SectionContainer';
import SelectionPage from './containers/SelectionPageContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={SignIn} />
        <Route path='/main' component={Section} page={'main'}/>
        <Route path='/SelectionPage' component={SelectionPage} />
        <Route path='/sports' component={Section} page={'sports'}/>
        <Route path='/business' component={Section} page={'business'}/>
        <Route path='/tech' component={Section} page={'tech'}/>
        <Route path='/world' component={Section} page={'world'}/>
        <Route path='/culture' component={Section} page={'culture'}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
