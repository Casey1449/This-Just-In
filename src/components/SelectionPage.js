import React from 'react';
import { Link } from 'react-router';
import SelectionForm from '../containers/SelectionFormContainer';
import firebase from 'firebase';
import _ from 'lodash';

export default class SelectionPage extends React.Component{

  componentDidMount(){
    this.props.clearArticles();
  }

  componentWillMount(){
    const all = this.props.allSources;

    if(this.props.userSources){
      for(let topic in all){
        all[topic].forEach((thing) => {
          this.updatePicked(thing);
        });
      }
    }
  }
  // fetch(page){
  //   this.props.allSources[page].forEach((source) => {
  //     if(source.picked){ this.props.fetchArticles(source.id, page); }
  //   });
  // }
  updatePicked(item) {
    const saved = this.props.userSources;
    for (let page in saved){
      if (saved[page].find( i => i.id === item.id )){
        this.props.matchPicked(item.id, page);
      }
    }
  }

  saveSources() {
    let sources = _.mapValues(this.props.allSources, (page) => {
      return page.filter(i => i.picked);
    });

    firebase.database().ref(this.props.auth.uid).set({sources});
  }

  componentWillUnmount(){
    this.props.fetchUserSources(this.props.auth.uid);
  }

  render(){
    return (
      <div className='selection-container'>
        <SelectionForm page={'main'} source={this.props.allSources.main}/>
        <SelectionForm page={'sports'} source={this.props.allSources.sports}/>
        <SelectionForm page={'business'} source={this.props.allSources.business}/>
        <SelectionForm page={'tech'} source={this.props.allSources.tech} />
        <SelectionForm page={'world'} source={this.props.allSources.world} />
        <SelectionForm page={'culture'} source={this.props.allSources.culture} />
        <button onClick={()=>this.saveSources()}>Save Selections</button>
      </div>
    );
  }
}
