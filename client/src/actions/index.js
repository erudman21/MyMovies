import axios from "axios";
import { FETCH_USER, FETCH_USER_MOVIES, LOAD_MOVIE_DATA } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const finalAddMovie = (values, history) => async dispatch => {
  const res = await axios.post("/api/movies", values);
  history.push("/movies");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMovies = () => async dispatch => {
  const res = await axios.get("/api/movies");
  dispatch({ type: FETCH_USER_MOVIES, payload: res.data });
};

export const loadMovieData = (title, history) => async dispatch => {
  var url = `http://www.omdbapi.com/?apikey=aa390b01&t=${title}`;
  const res = await axios.get(url);
  history.push("/movies/new");
  dispatch({ type: LOAD_MOVIE_DATA, payload: res.data });
};
