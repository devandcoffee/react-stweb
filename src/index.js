/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
