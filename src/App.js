import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loginPage from '@pages/auth/loginPage';
import registerPage from '@pages/auth/registerPage';

import GlobalStyles from '@styles/GlobalStyles';
import index from './pages';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Switch>
          <Route path="/" component={index} exact />
          <Route path="/register" component={registerPage} />
          <Route path="/login" component={loginPage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
