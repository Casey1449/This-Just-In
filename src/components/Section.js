import React from "react";
import Article from "./Article";

export default (props) => {

  const thisPageArticles = props.frontPageArticles[props.route.page];
  const arts = [];
  const print = (obj) => {
    for(let source in obj){
      obj[source].forEach( article => arts.push(article)); }
  };

  print(thisPageArticles);

  return (

    <section className="major-section-wrapper">
    { thisPageArticles ?
        arts.map( article =>
            <Article a={ article } /> )
        : <p> No sources selected </p> }
    </section>
  );
};
