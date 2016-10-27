import React from "react";

const Frontpage = ( props ) => {
  return (
    <div className="main-wrapper">
      <section>
        <p>Content goes here.</p>
        <button onClick={()=>props.fetchWapo()}>
            Get content</button>
        <section></section>
      </section>
    </div>
  );

};

export default Frontpage;
