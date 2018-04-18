import { Type } from '../actions';

export default store => next => action => {
	switch ( action.type ) {
		case Type.LIST_VIEW:
			if (window.localStorage) {
				window.localStorage.setItem('CURRENT_LIST_VIEW', action.view_type)
			}
			break;

		default:
			break;
	}
}