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
    <Router history = {browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={SignIn} />
        <Route path = '/main' component={Section} page={'main'}/>
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

// var App = React.createClass({
//   render: function() {
//     return (
//       <Locations>
//         <Location path="/" handler={MainPage} />
//         /* Check if user is logged in, redirect to login page if not */
//         <Location path="/account/:username" logged_in={this.state.logged_in} handler={this.state.logged_in ? AccountPage : createRedirect("/login")} />
//         <Location path={/\/friends\/(\d+)\/(photos|wall)/} logged_in={this.state.logged_in} handler={FriendsPage}
//       matchKeys={['id', 'pageName']} />
//       </Locations>
//     )
//   }
// })
