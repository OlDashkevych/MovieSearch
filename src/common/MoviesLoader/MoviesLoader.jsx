import React from 'react';
import { connect } from 'react-redux';
import { EatLoading } from 'react-loadingg';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import styles from './MoviesLoader.module.css';

const MoviesLoader = ({ loading }) => {
  return <div className={styles.loader}>{loading ? <EatLoading /> : null}</div>;
};

const mstp = state => ({
  loading: moviesSelectors.getLoading(state),
});

export default connect(mstp)(MoviesLoader);
