import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homepage />, document.getElementById('app-container'));
registerServiceWorker();