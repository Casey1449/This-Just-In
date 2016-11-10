import React from 'react';
import SelectionForm from '../containers/SelectionFormContainer';
import firebase from 'firebase';
import _ from 'lodash';
import { browserHistory } from "react-router";


export default class SelectionPage extends React.Component{

  componentDidMount(){
    this.props.clearArticles();
  }

  componentWillMount(){
    const all = this.props.allSources;

    if(this.props.userSources){
      for(let topic in all){
        if(all.hasOwnProperty(topic)){
          all[topic].forEach((thing) => {
            this.updatePicked(thing);
          });
        }
      }
    }
  }

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

    firebase.database().ref(this.props.auth.uid).set({sources}).then(()=>{
      browserHistory.push('/main');
    });

  }

  componentWillUnmount(){
    if(this.props.auth.uid){ this.props.fetchUserSources(this.props.auth.uid); }
  }

  render(){
    return (
      this.props.auth.uid ?
        <div className='selection-page-wrapper'>
          <div className='selection-container'>
            <SelectionForm page={'main'} source={this.props.allSources.main}/>
            <SelectionForm page={'sports'} source={this.props.allSources.sports}/>
            <SelectionForm page={'business'} source={this.props.allSources.business}/>
            <SelectionForm page={'tech'} source={this.props.allSources.tech} />
            <SelectionForm page={'world'} source={this.props.allSources.world} />
            <SelectionForm page={'culture'} source={this.props.allSources.culture} />
          </div>
          <button className='save-sources-button'
          onClick={()=>this.saveSources()}>
          Save Selections
          </button>
        </div>
      :
        <h1>Log in to do stuff</h1>
    );
  }
}
