import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/app.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from './reducers/main.js';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

console.log(preloadedState);

const store = createStore(
    rootReducer, 
    preloadedState,
    applyMiddleware(thunkMiddleWare)
  );

hydrate(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);


