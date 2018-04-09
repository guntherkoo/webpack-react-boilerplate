import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Route, HashRouter, Switch } from 'react-router-dom';

import reducer from './reducers';

import Homepage from './components/Homepage';

const ua = window.navigator.userAgent;
const html = document.querySelector('html');

export default class App extends Component {
	constructor(props) {
		super(props);

		const initial_states = {
			intro: false
		}

		const dev_tools = (window.devToolsExtension ? window.devToolsExtension() : f => f);

		const enhancer = compose(dev_tools);

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