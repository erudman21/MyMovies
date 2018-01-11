import { LOAD_MOVIE_DATA_FULL } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOAD_MOVIE_DATA_FULL:
      return action.payload;
    default:
      return state;
  }
}
