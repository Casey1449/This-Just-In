import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router";

module.exports = () => {

  return (
    <header>
      <h1 className="main-banner">This Just In</h1>
      <button className="login-button">Login</button>
      <Link to="/SelectionPage">
        <button className="settings-button">Settings</button>
      </Link>
      <Navbar />
    </header>
  );

};
