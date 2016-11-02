import React from "react";
import CheckBox from "../containers/CheckBoxContainer";
import { Link } from "react-router";


module.exports = (props) => {

  return (
    <div className="selection-container">
      {props.allSources.main.map(item => <div>
                                            <CheckBox
                                              source={item.id}
                                              name={item.name}
                                              bool={item.picked}
                                            />
                                            <br/>
                                          </div>)}
      <button
        onClick={ () => { props.setFrontSources();
                          props.frontPageSources.forEach((source) => {
                            props.fetchFrontPageArticles(source.id); });
                        }
                }>
      Create Homepage
      </button>
    </div>
  );

};






// <CheckBox source={'the-new-york-times'} name={'The New York Times'} /><br/>
// <CheckBox source={'the-washington-post'} name={'The Washington Post'} /><br/>
// <CheckBox source={'the-economist'} name={'The Economist'} /><br/>
// <CheckBox source={'cnn'} name={'CNN'} /><br/>
// <CheckBox source={'bbc-news'} name={'BBC News'} /><br/>
// <CheckBox source={'associated-press'} name={'Associated Press'} /><br/>
// <CheckBox source={'reuters'} name={'Reuters'} /><br/>
// <CheckBox source={'the-huffington-post'} name={'The Huffington Post'} /><br/>
// <CheckBox source={'usa-today'} name={'USA Today'} /><br/>
// <CheckBox source={'the-wall-street-journal'} name={'The Wall Street Journal'} /><br/>
