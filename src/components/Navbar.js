import React from 'react';
import { Link } from 'react-router';


module.exports = () => {

  return (
    <nav className='main-nav'>
      <ul className='nav-list'>
        <li>
          <Link to='/main'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/sports'>
            Sports
          </Link>
        </li>
        <li>
          <Link to='/business'>
            Business
          </Link>
        </li>
        <li>
          <Link to='/tech'>
            Tech & Science
          </Link>
        </li>
        <li>
          <Link to='/world'>
            World
          </Link>
        </li>
        <li>
          <Link to='/culture'>
            Pop Culture
          </Link>
        </li>
        <li>Pinned headlines</li>
      </ul>
    </nav>
  );

};
