import React from 'react';
import CheckBox from '../containers/CheckBoxContainer';

export default (props) => {

  return( <section className='source-selection-form'>
            <h2> {props.page} page </h2>
              {props.source.map( item => <CheckBox
                                            key={Math.random()}
                                            page={props.page}
                                            source={item.id}
                                            name={item.name}
                                            bool={item.picked}
                                          /> )}
          </section> );
};
