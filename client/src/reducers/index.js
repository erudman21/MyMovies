import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  movies: movieReducer
});
