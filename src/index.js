import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// imports pour le routing
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

// imports pour la mise en place du store redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer1 from './store/reducers/reducer1';
import reducer2 from './store/reducers/reducer2';


const rootReducer = combineReducers({
    r1: reducer1,
    r2: reducer2
});

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
