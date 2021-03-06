import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/server';
import styles from './Reviews.module.css';
import { reviewsMapper } from '../../assets/mapper';
import NotFound from '../NotFound/NotFound';

class Reviews extends Component {
  state = {
    reviews: false,
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { id } = this.props;
    API.getArticleReview(id)
      .then(({ data }) =>
        this.setState({ reviews: reviewsMapper(data.results) }),
      )
      .catch(err => console.log(err));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews && reviews.length ? (
          <ul className={styles.reviewsList}>
            {reviews.map(({ author, content, id }) => (
              <li key={id} className={styles.reviewsListItem}>
                <span className={styles.reviewsListTitle}>
                  Author: {author}
                </span>
                <p className={styles.reviewsListContent}>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <NotFound title={'Reviews'} />
        )}
      </>
    );
  }
}

export default Reviews;
