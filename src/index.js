import React from 'react';
import ReactDOM from 'react-dom';

import serviceWorkerRegister from './utils/registerServiceWorker';

// main styles
import './styles/index.css'
// components 
import App from './component/App';

// start point
ReactDOM.render(<App />, document.getElementById('root'));

// create sw.js file
serviceWorkerRegister();