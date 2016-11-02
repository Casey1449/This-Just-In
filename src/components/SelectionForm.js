import React from 'react';
import { Link } from 'react-router';
import CheckBox from '../containers/CheckBoxContainer';

export default (props) => {
  let route = "/" + props.page;
  return( <section className='source-selection-form'>
            <h2> {props.page} page </h2>
            {props.source.map(item => <div>
                                    <CheckBox
                                      page = {props.page}
                                      source={item.id}
                                      name={item.name}
                                      bool={item.picked}
                                    />
                                    <br/>
                                  </div>)}
            <Link to={route}>Show my {props.page} page!</Link>
          </section>);
};
