import React from 'react';

module.exports = (props) => {
  return (
    <label><input type="checkbox"
            className={props.source}
            onChange={() => { props.pickSource(props.source);} }
            defaultChecked={props.bool}
            />
      {props.name}
    </label>
  );
};
