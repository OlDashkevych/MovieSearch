import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './MainView.module.css';
import ArticleList from '../../common/ArticleList/ArticleList';
import Search from '../../common/Search/Search';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import MoviesLoader from '../../common/MoviesLoader/MoviesLoader';
import PaginationContainer from '../../common/PaginationContainer/PaginationContainer';

const MainView = ({ articles }) => {
  return (
    <div className={styles.appContainer}>
      <Search />
      {articles ? (
        <>
          <ArticleList items={articles} />
          <PaginationContainer />
        </>
      ) : (
        <MoviesLoader />
      )}
      <MoviesLoader />
    </div>
  );
};

const mstp = state => ({
  articles: moviesSelectors.getItems(state),
});

export default connect(mstp)(MainView);
