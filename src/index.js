import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import store from './Store.js'
import App from './App'
import './style/index.css'
let root = document.getElementById('root');

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    root
);
