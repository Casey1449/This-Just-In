import React from 'react';
import { Link } from 'react-router';


module.exports = () => {

  return (
    <nav className='main-nav'>
      <ul className='nav-list'>
      <Link to='/main' activeClassName="active">
          <li>
            Main
          </li>
        </Link>
        <Link to='/sports' activeClassName="active">
          <li>
            Sports
          </li>
        </Link>
        <Link to='/business' activeClassName="active">
          <li>
            Business
          </li>
        </Link>
        <Link to='/tech' activeClassName="active">
          <li>
            Tech & Science
          </li>
        </Link>
        <Link to='/world' activeClassName="active">
          <li>
            World
          </li>
        </Link>
        <Link to='/culture' activeClassName="active">
          <li>
            Pop Culture
          </li>
        </Link>
      </ul>
    </nav>
  );

};
