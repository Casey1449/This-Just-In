import React from "react";
import Article from "./Article";

class Frontpage extends React.Component{

  constructor(){
    super();
  }

  componentWillMount(){
    this.props.frontPageSources.forEach((source) => {
      this.props.fetchFrontPageArticles(source.id); });
  }

  render(){

    const articles1 = this.props.frontPageArticles.map((source)=>source.articles);

    return (
      <div className="main-wrapper">
        <section>
            { articles1.length > 0 ?
              articles1.map(item =>
                item.map(article =>
                  <Article a={article}/>
                )
              ) : <p>No sources selected</p> }
        </section>
      </div>
    );
  }
}

export default Frontpage;
