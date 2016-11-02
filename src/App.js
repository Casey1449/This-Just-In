import React, { Component } from "react";
import "./styles/App.css";
import Header from "./containers/HeaderContainer";
import Frontpage from "./containers/FrontpageContainer";
import SelectionPage from "./containers/SelectionPageContainer";

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
