import React from "react";

const Frontpage = ( props ) => {
  return (
    <div className="main-wrapper">
      <section>
        <p>Content goes here.</p>
        <button onClick={props.getWapo}>
            Get content</button>
        <section>{props.getFrontPage.value}</section>
      </section>
    </div>
  );

};

export default Frontpage;
