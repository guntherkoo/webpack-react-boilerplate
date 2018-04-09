import { connect } from 'react-redux';
import Homepage from './Homepage';
import { Action } from 'actions';

const mapStateToProps = (state) => {
	return {
		intro: state.intro
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		introClick: () => {
			dispatch(Action.introClick());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);