import moviesActionTypes from './moviesActionTypes';

const fetchMoviesStart = () => ({
  type: moviesActionTypes.FETCH_START,
});
const fetchMoviesSuccess = data => ({
  type: moviesActionTypes.FETCH_SUCCESS,
  payload: {
    data,
  },
});
const fetchMoviesFailure = error => ({
  type: moviesActionTypes.FETCH_FAILURE,
  payload: {
    error,
  },
});

const searchMoviesStart = () => ({
  type: moviesActionTypes.SEARCH_START,
});
const searchMoviesSuccess = data => ({
  type: moviesActionTypes.SEARCH_SUCCESS,
  payload: {
    data,
  },
});
const searchMoviesFailure = error => ({
  type: moviesActionTypes.SEARCH_FAILURE,
  payload: {
    error,
  },
});

export default {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
};
