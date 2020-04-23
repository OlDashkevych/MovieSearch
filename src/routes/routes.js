/* eslint-disable import/no-cycle */
import HomeView from '../views/HomeView/HomeView';
import RegisterView from '../views/RegisterView/RegisterView';
import LoginView from '../views/LoginView/LoginView';
import SavedFilmsView from '../views/SavedFilmsView/SavedFilmsView';
import MainView from '../views/MainView/MainView';
import MovieDetailsPage from '../views/MovieDetailsView/MovieDetailsView';

export default {
  MAIN: {
    path: '/main',
    component: MainView,
  },
  MOVIES_DETAILS: {
    path: '/movie/:movieId',
    component: MovieDetailsPage,
  },
  HOME: {
    path: '/',
    exact: true,
    component: HomeView,
  },
  REGISTER: {
    path: '/register',
    component: RegisterView,
  },
  LOGIN: {
    path: '/login',
    component: LoginView,
  },
  TASKS: {
    path: '/myfilms',
    component: SavedFilmsView,
  },
  CAST: {
    path: '/cast',
  },
  REVIEW: {
    path: '/reviews',
  },
  MOVIE: {
    path: '/movie',
  },
};
