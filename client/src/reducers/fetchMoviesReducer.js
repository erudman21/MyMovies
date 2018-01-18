import { FETCH_USER_MOVIES } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_USER_MOVIES:
			return action.payload;
		default:
			return state;
	}
}
