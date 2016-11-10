import React, { Component } from 'react';
import '../public/App.css';
import Header from './containers/HeaderContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    const { fetchUserSources, auth } = this.props;
    const currentAuthStatus = auth.status;
    const incomingAuthStatus = nextProps.auth.status;
    const incomingID = nextProps.auth.uid;

    if (incomingAuthStatus !== currentAuthStatus && incomingAuthStatus === 'LOGGED_IN') {
      fetchUserSources(incomingID);
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.userSources !== this.props.userSources){
      for(let page in this.props.userSources){
        if(this.props.userSources.hasOwnProperty(page)){
          this.fetch(page);
        }
      }
    }
  }

  fetch(page){
    this.props.userSources[page].forEach((source) => {
      this.props.fetchArticles(source.id, page);
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
