import React from "react";

module.exports = (props) => {

  return (
    <div className="selection-container">
      <label><input type="checkbox"
              className="cnn"
              onChange={() => { props.pickSource('the-new-york-times');} }/>
      New York Times
      </label><br/>
      <label><input type="checkbox"
              onChange={() => { props.pickSource('the-washington-post');} }/>
              Washington Post
      </label><br/>
      <label><input type="checkbox"
              onChange={() => { props.pickSource('the-economist');} }/>
              The Economist
      </label><br/>
      <label><input type="checkbox"
              className="cnn"
              onChange={() => { props.pickSource('cnn');} }/>
              CNN
      </label><br/>
      <label><input type="checkbox"
              onChange={() => { props.pickSource('bbc');} }/>
              BBC News
      </label><br/>
      <button onClick={props.setFrontSources}>Create Homepage</button>
    </div>
  );

};
