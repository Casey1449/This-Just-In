import React, { Component } from "react";
import "./styles/App.css";
import Header from "./containers/HeaderContainer";
import Frontpage from "./containers/FrontpageContainer";
import SelectionForm from "./containers/SelectionFormContainer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <SelectionForm />
        <Frontpage />
      </div>
    );
  }
}

export default App;
