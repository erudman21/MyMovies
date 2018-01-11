import { LOAD_MOVIE_DATA_LIGHT } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOAD_MOVIE_DATA_LIGHT:
      return action.payload;
    default:
      return state;
  }
}
