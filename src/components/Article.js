import React from 'react';

export default ({a}) => {
  return(
    <section>
      <h2>{a.title}</h2>
      <h4>{a.description}</h4>
      <p>{a.author}</p>
      <img src={a.urlToImage} width='500'/>
      <p><a href={a.url}>Link to full text</a></p>
    </section>
  );
};
