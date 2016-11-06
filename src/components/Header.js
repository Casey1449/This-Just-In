import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';

export default () => {
  return (
    <header>
      <h1 className='main-banner'>This Just In</h1>
      <Link to='/SelectionPage'>
      <button className='settings-button'>Settings</button>
      </Link>
      <button className='logout-button'>Log out</button>
      <p className='welcome-message'> Welcome back, Username </p>
      <Navbar />
    </header>
  );
};
