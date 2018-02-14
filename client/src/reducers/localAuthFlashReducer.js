import { LOCAL_AUTH_FLASH } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case LOCAL_AUTH_FLASH:
      return action.payload;
    default:
      return state;
  }
}
