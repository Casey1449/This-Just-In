import React, { Component } from "react";
import "./styles/App.css";
import Header from "./containers/HeaderContainer";
import Frontpage from "./containers/FrontpageContainer";
import SelectionForm from "./containers/SelectionFormContainer";

class App extends Component {

  constructor(){
    super();
    this.renderArticle = this.renderArticle.bind(this);
    this.renderSource = this.renderSource.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  renderArticle(article) {
    return(
      <section>
        <h1>{article.title}</h1>
        <h2>{article.description}</h2>
        <h3>{article.author}</h3>
        <p><a href={article.url}>Link to full text</a></p>
      </section>
    );
  }

  renderSource(source) {
    let arr = source.articles.map( (article) => {
        return this.renderArticle(article);
      });
      return arr.forEach(article => {
        console.log(article);
        return <div>{article}</div>;});
  }

  renderPage(sources) {
    return sources.forEach(source => this.renderSource(source));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SelectionForm />
        <Frontpage
          render={this.renderSource}
        />
      </div>
    );
  }
}

export default App;
