import React from "react";
import CheckBox from "../containers/CheckBoxContainer";
import { Link } from "react-router";


export default class SelectionForm extends React.Component{

  constructor(){
    super();
  }

  componentDidMount(){
    this.props.clearFrontArticles();
  }

  componentWillUnmount(){
    this.props.setFrontSources();
      this.props.frontPageSources.forEach((source) => {
        this.props.fetchFrontPageArticles(source.id); });
  }

  render(){

    const sources = this.props.allSources.main;

    return (
      <div className="selection-container">
        {sources.map(item => <div>
                                <CheckBox
                                  source={item.id}
                                  name={item.name}
                                  bool={item.picked}
                                />
                                <br/>
                              </div>)}
      <Link to="/front">Show my front page!</Link>
      </div>
    );
  }
}
