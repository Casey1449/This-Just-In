import React from 'react';

module.exports = (props) => {
  return (
    <label><input type="checkbox"
            className={props.source}
            onChange={() => { props.pickSource(props.source);} }
            />
      {props.name}
    </label>
  );
};
