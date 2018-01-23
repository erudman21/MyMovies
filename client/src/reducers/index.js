import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchMoviesReducer from './fetchMoviesReducer';
import loadMovieFullReducer from './loadMovieFullReducer';
import loadMovieLightReducer from './loadMovieLightReducer';
import movieTheatersReducer from './movieTheatersReducer';

export default combineReducers({
	auth: authReducer,
	fetchMovies: fetchMoviesReducer,
	loadMovieDataFull: loadMovieFullReducer,
	loadMovieDataLight: loadMovieLightReducer,
	fetchTheaters: movieTheatersReducer
});
