import { connect } from 'react-redux';
import Homepage from './Homepage';
import { Action } from 'actions';

const mapStateToProps = (state) => {
	return {
		intro: state.intro,
		view_type: state.view_type
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		switchViewsDefault: () => {
			dispatch(Action.switchViews('default'));
		},
		switchViewsAdvanced: () => {
			dispatch(Action.switchViews('advanced'));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);