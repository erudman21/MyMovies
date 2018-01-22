import { MOVIE_THEATERS } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case MOVIE_THEATERS:
			return action.payload;
		default:
			return state;
	}
}
