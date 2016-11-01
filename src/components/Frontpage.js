import React from "react";
import Article from "./Article";
import _ from "lodash";

const Frontpage = ( props ) => {

  const articles1 = props.frontPageArticles.map((source)=>source.articles);
  console.log(articles1);
  const allArticles = _.flatten(articles1);

  return (
    <div className="main-wrapper">
      <section>
        <button
          onClick={ () => { props.frontPageSources.forEach((source) => {
                            props.fetchFrontPageArticles(source.id); });
                          }
                        }>
          Get content
        </button>
        <section>
          { props.frontPageArticles.length > 0 ? articles1.map((item)=>item.map((article)=><Article a={article}/>))
                                                  : <p>show stuff here</p> }
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
