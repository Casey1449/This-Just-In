import React from "react";
import CheckBox from "../containers/CheckBoxContainer";
import { Link } from "react-router";
import SelectionForm from "../containers/SelectionFormContainer";


export default class SelectionPage extends React.Component{

  constructor(){
    super();
  }

  componentDidMount(){
    this.props.clearFrontArticles();
  }

  fetch(page){
    this.props.allSources[page].forEach((source) => {
      if(source.picked === true){
        this.props.fetchArticles(source.id, page);}
    });
  }

  componentWillUnmount(){
    for(let page in this.props.allSources){
      this.fetch(page);
    }
  }

  render(){

    const mainSources = this.props.allSources.main;
    const sportsSources = this.props.allSources.sports;
    const businessSources = this.props.allSources.business;
    const techSources = this.props.allSources.tech;
    const worldSources = this.props.allSources.world;
    const cultureSources = this.props.allSources.culture;

    return (
      <div className="selection-container">
        <SelectionForm page={"main"} source={mainSources}/>
        <SelectionForm page={"sports"} source={sportsSources}/>
        <SelectionForm page={"business"} source={businessSources}/>
        <SelectionForm page={"tech"} source={techSources} />
        <SelectionForm page={"world"} source={worldSources} />
        <SelectionForm page={"culture"} source={cultureSources} />
      </div>
    );
  }
}
