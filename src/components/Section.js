import React from 'react';
import Article from './Article';

export default (props) => {

  const thisPageArticles = props.frontPageArticles[props.route.page];

  const articles = [];

  for(let source in thisPageArticles){
    thisPageArticles[source].forEach(article => articles.push(article)); }

  return (
    <section className='major-section-wrapper'>
    { thisPageArticles ?
        articles.map( item =>
            <Article article={ item } /> )
        : <p> No sources selected </p> }
    </section>
  );
};
