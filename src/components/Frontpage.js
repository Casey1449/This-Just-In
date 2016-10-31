import React from "react";

const Frontpage = ( props ) => {
  return (
    <div className="main-wrapper">
      <section>
        <p>Content goes here.</p>
        <button onClick={() => { if (props.getFrontPage.frontPageSources){
                                props.getFrontPage.frontPageSources
                                .map((item)=>{props.fetchSource(item.id);});
                                } else {
                                  return null; } }}>
          Get content
        </button>
        <section> 
        </section>
      </section>
    </div>
  );

};

export default Frontpage;

// { props.getFrontPage.articles[0] ?
//   props.getFrontPage.articles.map( (article) => {
//     return (<ul>
//               <h3>{article.title}</h3>
//               <p>{article.author}</p>
//               <p>{article.description}</p>
//               <a href={article.url}>Link to full article</a>
//             </ul>);
//           })   : 'Press button to get content' }
