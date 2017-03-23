import React from 'react';
import CheckBox from '../containers/CheckBoxContainer';
import { Panel } from 'react-bootstrap';

export default (props) => {

  return( <Panel collapsible className='source-selection-form' bsStyle='primary' header={props.page}>
              {props.source.map( item => <CheckBox
                                            key={Math.random()}
                                            page={props.page}
                                            source={item.id}
                                            name={item.name}
                                            bool={item.picked}
                                          /> )}
          </Panel> );
};
