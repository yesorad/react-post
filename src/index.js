import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { checkUser } from './modules/auth';

const store = createStore(rootReducer, composeWithDevTools());

const loadUser = () => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(checkUser(user));
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
