import moviesActions from './moviesActions';
import * as moviesApiService from '../../services/server';
import { listMapper } from '../../assets/mapper';

const fetchMovies = (page = 1) => dispatch => {
  dispatch(moviesActions.fetchMoviesStart());

  moviesApiService
    .getArticles(page)
    .then(({ data }) =>
      dispatch(moviesActions.fetchMoviesSuccess(listMapper(data.results))),
    )
    .catch(error => dispatch(moviesActions.fetchMoviesFailure(error)));
};

const searchMovies = (query, page = 1) => dispatch => {
  dispatch(moviesActions.searchMoviesStart());

  moviesApiService
    .getArticlesByQuery(query, page)
    .then(({ data }) => {
      dispatch(moviesActions.searchMoviesSuccess(listMapper(data.results)));
    })
    .catch(error => dispatch(moviesActions.searchMoviesFailure(error)));
};

export default { fetchMovies, searchMovies };
