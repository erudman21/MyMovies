import axios from "axios";
import { FETCH_USER, FETCH_USER_MOVIES } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addMovie = (values, history) => async dispatch => {
  const res = await axios.post("/api/movies", values);
  history.push("/movies");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMovies = () => async dispatch => {
  const res = await axios.get("/api/movies");
  dispatch({ type: FETCH_USER_MOVIES, payload: res.data });
};
