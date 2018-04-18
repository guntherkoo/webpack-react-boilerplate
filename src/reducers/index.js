import { Type } from '../actions';

export default function reducer(state = {}, action) {
	switch (action.type) {
		case Type.INTRO:
			return {
				...state,
				intro: true
			}

		case Type.LIST_VIEW:
		console.log(state)
			return {
				...state,
				view_type: state.view_type
			}

		default:
			return state;
	}
}