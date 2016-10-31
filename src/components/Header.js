import React from "react";
import Navbar from "./Navbar";

module.exports = () => {

  return (
    <header>
      <h1 className="main-banner">This Just In</h1>
      <button className="login-button">Login</button>
      <button className="settings-button">Settings</button>
      <Navbar />
    </header>
  );

};
