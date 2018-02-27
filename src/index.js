import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Link, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import Subpage from './components/Subpage';

const ua = window.navigator.userAgent;
const html = document.querySelector('html');

export default class App extends Component {
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
			<HashRouter>
				<div>
					<div>
						<Link to='/'>Homepage</Link>
						<Link to='/subpage'>Subpage</Link>
					</div>
					<Switch>
						<Route path='/' exact component={Homepage} />
						<Route path='/subpage' exact component={Subpage} />
					</Switch>
				</div>
			</HashRouter>
		)
	}
}

ReactDOM.render(
	<App />, document.getElementById('app')
);