import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';
import fs from 'fs'
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

