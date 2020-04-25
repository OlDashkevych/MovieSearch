import React, { Component } from 'react';
import { listMapper } from '../../assets/mapper';
import * as API from '../../services/server';
import ArticleList from '../../common/ArticleList/ArticleList';
import NotFound from '../../common/NotFound/NotFound';

class SavedFilmsView extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const persistedFilms = localStorage.getItem('ID');
    if (persistedFilms) {
      const parsedFilms = JSON.parse(persistedFilms);
      parsedFilms.map(id =>
        API.getArticlesById(id).then(({ data }) =>
          this.setState(state => {
            return { articles: [...state.articles, data] };
          }),
        ),
      );
    }
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="">
        {articles && articles.length ? (
          <ArticleList items={listMapper(articles)} />
        ) : (
          <NotFound title="Saved films" />
        )}
      </div>
    );
  }
}

export default SavedFilmsView;
