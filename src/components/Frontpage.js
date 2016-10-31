import React from "react";

const Frontpage = ( props ) => {
  return (
    <div className="main-wrapper">
      <section>
        <p>Content goes here.</p>
        <button
          onClick={ () => { props.frontPageSources.forEach((source) => {
                            props.fetchFrontPageArticles(source.id); });
                          }
                        }>
          Get content
        </button>
        <section>
        </section>
      </section>
    </div>
  );

};

export default Frontpage;

// { props.frontPageSources.articles[0] ?
//   props.frontPageSources.articles.map( (article) => {
//     return (<ul>
//               <h3>{article.title}</h3>
//               <p>{article.author}</p>
//               <p>{article.description}</p>
//               <a href={article.url}>Link to full article</a>
//             </ul>);
//           })   : 'Press button to get content' }
