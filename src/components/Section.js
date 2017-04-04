import React from 'react';
import Article from './Article';

export default (props) => {

  const thisPageArticles = props.frontPageArticles[props.route.page];

  const articles = [];

  for(let source in thisPageArticles){
    if(thisPageArticles.hasOwnProperty(source)){
      thisPageArticles[source].forEach((article) => {
        articles.push(article);
      });
    }
  }

  if (props.auth.status === 'LOGGED_IN'){
    return (
        <section className='major-section-wrapper'  id={props.route.page}>
        { thisPageArticles ?
            articles.map( item =>
                <Article
                  article={ item }
                  key={ item.title }
                /> )
            : <h2> No {props.route.page} sources selected </h2>
            }
        </section>
    );
  } else {
    return (
      <section className='major-section-wrapper' id={props.route.page}>
        <h2> Log in to see your {props.route.page} page </h2>
      </section>
    );
  }
};
