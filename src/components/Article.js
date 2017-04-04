import React from 'react';
import { Media, Image } from 'react-bootstrap';

export default ({article}) => {

  return(
    <a href={article.url} target="_blank" className='news-list-link'>
      <Media className='news-list-item'>
        <Media.Left align='middle' className='media-image'>
          <img src={article.urlToImage} alt={article.title} width={150}/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{article.title}</Media.Heading>
          <p><i>{article.description}</i></p>
          <p>{article.author}</p>
        </Media.Body>
      </Media>
    </a>
  );
};
