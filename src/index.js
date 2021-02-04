import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { checkUser } from './modules/auth';
import instance from './lib/api/instance';

const store = createStore(rootReducer, composeWithDevTools());

const loadUser = () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('user');
    if (!userData) return;
    const user = JSON.parse(userData);
    store.dispatch(checkUser(user));
    if (accessToken) {
      instance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`;
    }
  } catch (e) {
    console.log('localstrage is not working');
  }
};

loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
