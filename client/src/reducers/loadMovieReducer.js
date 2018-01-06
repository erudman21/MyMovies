import { LOAD_MOVIE_DATA } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case LOAD_MOVIE_DATA:
      return action.payload;
    default:
      return state;
  }
}
