import React from 'react';

export default ({article}) => {
  return(
    <section>
      <h2>{article.title}</h2>
      <h4>{article.description}</h4>
      <p>{article.author}</p>
      <img src={article.urlToImage} width='500'/>
      <p><a href={article.url}>Link to full text</a></p>
    </section>
  );
};
