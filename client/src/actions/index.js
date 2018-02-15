import axios from 'axios';
import * as types from './types';

// Get the current user for auth
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

// Get the error messages for local register/login authentication
export const getFlashRegisterMessages = () => async dispatch => {
  const res = await axios.get('/auth/local/register');
  dispatch({ type: types.LOCAL_AUTH_FLASH, payload: res.data });
};

export const getFlashLoginMessages = () => async dispatch => {
  const res = await axios.get('/auth/local/login');
  dispatch({ type: types.LOCAL_AUTH_FLASH, payload: res.data });
};

// add movie to database and redirect user to "/movies"
export const addMovie = (values, history) => async dispatch => {
  const res = await axios.post('/api/movies', values);
  history.push('/movies');
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

// Get the user's movies
export const fetchMovies = () => async dispatch => {
  const res = await axios.get('/api/movies');
  dispatch({ type: types.FETCH_USER_MOVIES, payload: res.data });
};

// Delete the movie with title from the user's list of movies
export const deleteMovie = movie => async dispatch => {
  const res = await axios.post('/api/movies/delete', movie);
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

// Get the top current box office movies from Fandango
export const fetchFandangoMovies = () => async dispatch => {
  const res = await axios.get('/fandango/movies');
  dispatch({ type: types.FETCH_FANDANGO_MOVIES, payload: res.data });
};

// Load all of the movie's info by making a request to omdb api with the id
// Used for displaying info on the movie form page
export const loadMovieDataFull = (id, history) => async dispatch => {
  const res = await axios.post('/omdb/movie/full', id);
  history.push('/movies/new');
  dispatch({ type: types.LOAD_MOVIE_DATA_FULL, payload: res.data });
};

// Loads limited amount of data for movies by making a request with title
// Used to get list of movies for search bar
export const loadMovieDataLight = title => async dispatch => {
  const res = await axios.post('/omdb/movie/short', title);
  dispatch({ type: types.LOAD_MOVIE_DATA_LIGHT, payload: res.data });
};
