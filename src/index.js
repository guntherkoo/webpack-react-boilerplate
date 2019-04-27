import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Route, HashRouter, Switch } from 'react-router-dom';

import reducer from './reducers';
import SettingsMiddlewares from './middlewares/SettingsMiddlewares';

import Homepage from './pages/Homepage';

const ua = window.navigator.userAgent;
const html = document.querySelector('html');

export default class App extends Component {
	constructor(props) {
		super(props);

		const initial_states = {
			intro: false,
			view_type: 'default'
		};

		if (window.localStorage.hasOwnProperty('CURRENT_LIST_VIEW')) {
			const view_type = window.localStorage.getItem('CURRENT_LIST_VIEW');
			Object.assign(initial_states, {
				view_type,
			});
		}

		// Redux Devtool Extension
		const dev_tools = (window.devToolsExtension ? window.devToolsExtension() : f => f);

		const middlewares = [
			SettingsMiddlewares
		];

		const enhancer = compose(applyMiddleware(...middlewares), dev_tools);

		this.store = createStore(reducer, initial_states, enhancer);
	}

	componentWillMount() {
		// User Agent Detect 
		if ( !!ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
			html.classList.add('touch');
		} else {
			html.classList.add('no-touch');
		}

		if (!!ua.match(/(iPad)/i)) {
			html.classList.add('ios','no-android','ios-tablet');
		}

		if (!!ua.match(/(iPod|iPhone|iPad)/i)) {
			html.classList.add('ios','no-android');
		}

		if (!!ua.match(/(Android)/i)) {
			html.classList.add('no-ios','android');
		}
	}

	render() {
		return (
			<Provider store={this.store}>
				<HashRouter>
					<Switch>
						<Route path='/' exact component={Homepage} />
					</Switch>
				</HashRouter>
			</Provider>
		)
	}
}

ReactDOM.render(
	<App />, document.getElementById('app')
);