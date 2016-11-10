import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';
import AuthBox from '../containers/AuthBoxContainer';

export default () => {
  return (
    <header>
      <h1 className='main-banner'>This Just In</h1>
      <Link to='/SelectionPage'>
        <button className='settings-button'>Settings</button>
      </Link>
      <AuthBox />
      <Navbar />
    </header>
  );
};
