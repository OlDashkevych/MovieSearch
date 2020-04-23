import { combineReducers } from 'redux';
import authActionTypes from './moviesActionTypes';

const items = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.FETCH_SUCCESS:
    case authActionTypes.SEARCH_SUCCESS:
      return payload.data;

    default:
      return state;
  }
};
const error = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.FETCH_FAILURE:
    case authActionTypes.SEARCH_FAILURE:
      return payload.error;

    case authActionTypes.FETCH_SUCCESS:
    case authActionTypes.SEARCH_SUCCESS:
      return null;

    default:
      return state;
  }
};
const loading = (state = false, { type }) => {
  switch (type) {
    case authActionTypes.FETCH_START:
    case authActionTypes.SEARCH_START:
      return true;

    case authActionTypes.FETCH_SUCCESS:
    case authActionTypes.SEARCH_SUCCESS:
    case authActionTypes.FETCH_FAILURE:
    case authActionTypes.SEARCH_FAILURE:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  error,
  loading,
});
