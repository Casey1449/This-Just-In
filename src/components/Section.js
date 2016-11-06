import React from 'react';
import Article from './Article';

export default (props) => {

  const thisPageArticles = props.frontPageArticles[props.route.page];

  const articles = [];

  for(let source in thisPageArticles){
    thisPageArticles[source].forEach(article => articles.push(article)); }
  if (props.auth.status === 'LOGGED_IN'){
    return (
      <section className='major-section-wrapper'>
      { thisPageArticles ?
          articles.map( item =>
              <Article article={ item } /> )
          : <p> No sources selected </p> }
      </section>
    );
  } else {
    return (
      <section className='major-section-wrapper'>
        <h2> Log in to see your {props.route.page} page </h2>
      </section>
    );
  }
};
