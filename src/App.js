import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Frontpage from "./components/Frontpage";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Frontpage />
      </div>
    );
  }
}

export default App;
