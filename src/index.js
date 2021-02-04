import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(composeWithDevTools(applyMiddleware(sagaMiddleware)));

const customHistory = createBrowserHistory();

// sagaMiddleware.run();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
