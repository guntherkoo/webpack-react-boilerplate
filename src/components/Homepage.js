import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import styles from './Homepage.scss';

export default class Homepage extends Component {
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
				</div>
			</div>
		);
	}
}