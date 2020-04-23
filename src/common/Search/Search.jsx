import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import qs from 'query-string';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import moviesOperations from '../../redux/movies/moviesOperations';
import routes from '../../routes/routes';
import styles from './Search.module.css';

class Search extends Component {
  state = {
    value: '',
  };

  componentDidMount() {
    const { location, onSearch, onFetch, history } = this.props;
    if (location.search) {
      const searchParams = qs.parse(location.search).query;
      this.setState({ value: searchParams });
      onSearch(searchParams);
      return;
    }
    onFetch();
    history.push(routes.MAIN.path);
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
    const { onFetch, history } = this.props;

    if (!target.value) {
      onFetch();
      history.push(routes.MAIN.path);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onFetch, onSearch, history } = this.props;
    const { value } = this.state;
    if (value) {
      onSearch(value);
      history.push({
        ...this.props.location,
        search: `query=${value}`,
      });
    } else {
      onFetch();
      history.push(routes.MAIN.path);
    }
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            onChange={this.handleChange}
            value={value}
            type="text"
            className={styles.input}
            placeholder="Search..."
          />
          <button type="submit" className={styles.button}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </>
    );
  }
}

const mdtp = dispatch => ({
  onSearch: value => dispatch(moviesOperations.searchMovies(value)),
  onFetch: () => dispatch(moviesOperations.fetchMovies()),
});

export default compose(
  withRouter,
  connect(
    null,
    mdtp,
  ),
)(Search);
