import React, { Component } from "react";
import "./styles/App.css";
import Header from "./containers/HeaderContainer";
import Frontpage from "./containers/FrontpageContainer";

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
