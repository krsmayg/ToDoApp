import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/tailwind.output.css';
import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

