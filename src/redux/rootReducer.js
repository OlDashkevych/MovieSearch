import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authReducer from './auth/authReducer';
import themeReducer from './appTheme/appThemeReducer';
import moviesReducer from './movies/moviesReducer';
import config from './config';

const rootReducer = combineReducers({
  auth: persistReducer(config.authPersistConfig, authReducer),
  theme: themeReducer,
  movies: moviesReducer,
});

export default rootReducer;
