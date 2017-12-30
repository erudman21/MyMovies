import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  // Current state of the login process is
  switch (action.type) {
    // Whether or not the user is logged in
    case FETCH_USER:
      return action.payload || false;
    // It's unclear whether or not the user is logged in
    default:
      return state;
  }
}
