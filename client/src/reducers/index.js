import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchMoviesReducer from './fetchMoviesReducer';
import loadMovieFullReducer from './loadMovieFullReducer';
import loadMovieLightReducer from './loadMovieLightReducer';
import fandangoMoviesReducer from './fandangoMoviesReducer';

export default combineReducers({
  auth: authReducer,
  fetchMovies: fetchMoviesReducer,
  loadMovieDataFull: loadMovieFullReducer,
  loadMovieDataLight: loadMovieLightReducer,
  fandangoMovies: fandangoMoviesReducer
});
