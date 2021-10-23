import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from 'redux';
import App from './components/App' 
import './index.css'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

//redux tools buat develop
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root'))