import { FETCH_FANDANGO_MOVIES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FANDANGO_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
