import React, { Component } from "react";
import "./styles/App.css";
import Header from "./containers/HeaderContainer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
