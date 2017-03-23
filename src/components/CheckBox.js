import React from 'react';
import { Checkbox } from 'react-bootstrap';

module.exports = (props) => {
  return (
    <Checkbox
            key={props.source}
            className={props.source}
            onChange={() => { props.pickSource(props.source, props.page);} }
            defaultChecked={props.bool}
            >
      {props.name}
    </Checkbox>
  );
};
