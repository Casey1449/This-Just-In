import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';
import AuthBox from '../containers/AuthBoxContainer';

export default () => {
  return (
    <header>
      <div className="jumbotron">
        <h1 className='main-banner'>This Just In</h1>
        <AuthBox />
      </div>
      <Navbar />
    </header>
  );
};
