import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.module.css';
import GoBackButton from '../GoBackButton/GoBackButton';
import SaveFilmBtn from '../SaveFilmBtn/SaveFilmBtn';

const Article = ({
  posterPath,
  title,
  userScore,
  overview,
  genres,
  onGoBack,
  id,
}) => {
  return (
    <div className={styles.articleWrapper}>
      <GoBackButton onGoBack={onGoBack} />
      <div className={styles.article}>
        <img src={posterPath} alt="film-banner" className={styles.articleImg} />
        <div className={styles.articleDescription}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.score}>Score: {userScore}</span>
          <div className="">
            <h3 className={styles.overviewTitle}>Overview</h3>
            <p className={styles.overview}>{overview}</p>
          </div>
          <div className="">
            <h3>Genres</h3>
            <p>{genres}</p>
          </div>
          <SaveFilmBtn id={id} />
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default Article;
