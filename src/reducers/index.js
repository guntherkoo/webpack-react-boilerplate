import { Type } from '../actions';

export default function reducer(state = {}, action) {
	switch (action.type) {
		case Type.INTRO:
			return {
				...state,
				intro: true
			}

		default:
			return state;
	}
}