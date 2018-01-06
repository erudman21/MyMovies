import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import fetchMoviesReducer from "./fetchMoviesReducer";
import loadMovieReducer from "./loadMovieReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  fetchMovies: fetchMoviesReducer,
  loadMovieData: loadMovieReducer
});
