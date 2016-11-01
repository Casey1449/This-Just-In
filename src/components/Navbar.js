import React from "react";
import { Link } from "react-router";


module.exports = () => {

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li>
          <Link to="/front">
            Home
          </Link>
        </li>
        <li>Sports</li>
        <li>Business</li>
        <li>Science</li>
        <li>Pinned headlines</li>
      </ul>
    </nav>
  );

};
