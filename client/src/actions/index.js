import axios from "axios";
import {
  FETCH_USER,
  FETCH_USER_MOVIES,
  LOAD_MOVIE_DATA_FULL,
  LOAD_MOVIE_DATA_LIGHT
} from "./types";

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

export const loadMovieDataFull = (id, history) => async dispatch => {
  const res = await axios.post("/omdb/movie/full", id);
  history.push("/movies/new");
  dispatch({ type: LOAD_MOVIE_DATA_FULL, payload: res.data });
};

export const loadMovieDataLight = title => async dispatch => {
  const res = await axios.post("/omdb/movie/short", title);
  dispatch({ type: LOAD_MOVIE_DATA_LIGHT, payload: res.data });
};
