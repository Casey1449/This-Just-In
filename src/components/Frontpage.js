import React from "react";

const Frontpage = ( props ) => {
  return (
    <div className="main-wrapper">
      <section>
        <p>Content goes here.</p>
        <button onClick={()=> props.fetchSource(props.getFrontPage.sources[0])}>
          Get content
        </button>
        <section>{ props.getFrontPage.articles ?
                    props.getFrontPage.articles.map( (article) => {
                      return (<ul>
                                <h3>{article.title}</h3>
                                <p>{article.author}</p>
                                <p>{article.description}</p>
                                <a href={article.url}>Link to full article</a>
                              </ul>);
                    }) : 'Press button to get content' }
        </section>
      </section>
    </div>
  );

};

export default Frontpage;
