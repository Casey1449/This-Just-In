import React from "react";
import { Link } from "react-router";
import CheckBox from "../containers/CheckBoxContainer";

export default (props) => {

  return( <section className="source-selection-form">
            <h2> {props.page} page </h2>
              {props.source.map( item => <CheckBox
                                            page = {props.page}
                                            source={item.id}
                                            name={item.name}
                                            bool={item.picked}
                                          /> )}
            <Link to={ "/" + props.page } className="page-link">Show my {props.page} page!</Link>
          </section> );
};
