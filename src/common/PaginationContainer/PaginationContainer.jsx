import React, { Component } from 'react';
import moviesOperations from '../../redux/movies/moviesOperations';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { compose } from 'redux';
import qs from 'query-string';
import { withRouter } from 'react-router-dom';
import styles from './PaginationContainer.module.css';

class PaginationContainer extends Component {
  state = {};

  handlePageClick = e => {
    const { location, history, onFetch, onSearch } = this.props;
    const searchParams = qs.parse(location.search).query;
    if (searchParams) {
      onSearch(searchParams, e.selected + 1);
      console.log('exist', searchParams);
      return;
    }
    onFetch(e.selected + 1);
  };

  render() {
    return (
      <div className={styles.paginateWrapper}>
        <ReactPaginate
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={this.handlePageClick}
          containerClassName={styles.paginationContainer}
          subContainerClassName={'pages pagination'}
          pageLinkClassName={styles.pageLink}
          activeLinkClassName={styles.active}
          onClick={this.handlePageClick}
          disabledClassName={styles.disabled}
          previousLinkClassName={styles.pageBtn}
          nextLinkClassName={styles.pageBtn}
        />
      </div>
    );
  }
}

const mdtp = dispatch => ({
  onFetch: page => dispatch(moviesOperations.fetchMovies(page)),
  onSearch: (query, page) =>
    dispatch(moviesOperations.searchMovies(query, page)),
});

export default compose(
  withRouter,
  connect(
    null,
    mdtp,
  ),
)(PaginationContainer);
