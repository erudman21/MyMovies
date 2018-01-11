import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import fetchMoviesReducer from "./fetchMoviesReducer";
import loadMovieFullReducer from "./loadMovieFullReducer";
import loadMovieLightReducer from "./loadMovieLightReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  fetchMovies: fetchMoviesReducer,
  loadMovieDataFull: loadMovieFullReducer,
  loadMovieDataLight: loadMovieLightReducer
});
