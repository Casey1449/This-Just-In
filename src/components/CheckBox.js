import React from 'react';

module.exports = (props) => {
  return (
    <label><input type='checkbox'
            key={props.source}
            className={props.source}
            onChange={() => { props.pickSource(props.source, props.page);} }
            defaultChecked={props.bool}
            />
      {props.name}
      <br/>
    </label>
  );
};
