import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './ArticleList.module.css';
import routes from '../../routes/routes';
import NotFound from '../NotFound/NotFound';

const ArticleList = ({ items, location, match }) => {
  return (
    <>
      {items.length ? (
        <ul className={styles.articleList}>
          {items.map(({ id, title, name, backdropPath }) => (
            <li key={id} className={styles.articleListItem}>
              <Link
                to={{
                  pathname: `${routes.MOVIE.path}/${id}`,
                  state: { from: { ...location }, prevPage: { ...match } },
                }}
                className={styles.articleListLink}
              >
                <span className={styles.articleListTitle}>{title || name}</span>
                <img
                  src={backdropPath}
                  alt=""
                  width="300"
                  height="173"
                  className={styles.articleListImage}
                />
                <div className={styles.inner} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <NotFound title={'Films'} />
      )}
    </>
  );
};

ArticleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(ArticleList);
