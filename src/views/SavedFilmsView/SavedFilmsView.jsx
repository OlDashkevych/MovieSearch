import React, { Component } from 'react';
import { listMapper } from '../../assets/mapper';
import * as API from '../../services/server';
import ArticleList from '../../common/ArticleList/ArticleList';

class SavedFilmsView extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const { articles } = this.state;

    const persistedFilms = JSON.parse(localStorage.getItem('ID'));
    persistedFilms.map(id =>
      API.getArticlesById(id).then(({ data }) =>
        this.setState(state => {
          return { articles: [...state.articles, data] };
        }),
      ),
    );
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="">
        {articles && articles.length ? (
          <ArticleList items={listMapper(articles)} />
        ) : null}
      </div>
    );
  }
}

export default SavedFilmsView;
