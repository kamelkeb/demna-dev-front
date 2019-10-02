import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import pour Semantic-UI
import 'semantic-ui-css/semantic.min.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

// imports pour le routing
import { BrowserRouter } from 'react-router-dom'

// Pour l'accès aux APIs REST et la gestion des requêtes
import axios from 'axios'

// imports pour la mise en place du store redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// reducers définis dans l'app
import reducerAlertes from './store/reducers/reducerAlertes'
import reducerLanguage from './store/reducers/reducerLanguage'


const rootReducer = combineReducers({
    alertes: reducerAlertes,
    language: reducerLanguage
});

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
