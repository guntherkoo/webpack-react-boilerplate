import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/svg/logo.svg';
import styles from './Homepage.scss';

export default class Homepage extends Component {
	static PropTypes = {
		intro: PropTypes.bool,
		view_type: PropTypes.string
	}

	state = {
		view_type: this.props.view_type
	}

	constructor(props){
		super(props);

		this.switchView = this.switchView.bind(this);
	}

	switchView() {
		if (this.state.view_type === 'default') {
			this.props.switchViewsAdvanced();

			this.setState({
				view_type: 'advanced'
			});

		} else {
			this.props.switchViewsDefault();

			this.setState({
				view_type: 'default'
			});
		}
	}

	render() {
		return (
			<div className={styles('container', 'row')}>
				<div className={styles('logo')}>
					<img src={logo} className={styles('logo-img')} alt="logo" />
				</div>
				<div className={styles('content')}>
					<h2>
						Welcome to React
					</h2>
					<p className={styles('intro')}>
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
					<button type='button' onClick={this.switchView}>
						{this.state.view_type}
					</button>
				</div>
			</div>
		);
	}
}