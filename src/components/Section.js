import React from "react";
import Article from "./Article";

class Section extends React.Component{

  render(){

    const articles = this.props.frontPageArticles;
    const thisPage = this.props.route.page;

    return (
      <div className="main-wrapper">
        <section>
            { articles[thisPage] ?
              articles[thisPage].articles.map(article =>
                  <Article a={article}/>
              ) : <p>No sources selected</p> }
        </section>
      </div>
    );
  }
}

export default Section;
