import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loginPage from '@pages/auth/loginPage';
import registerPage from '@pages/auth/registerPage';

import GlobalStyles from '@styles/GlobalStyles';
import index from './pages';
import Layout from './components/Layout';
import HeaderContainer from './containers/HeaderContainer';
import postList from './pages/posts/postList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <HeaderContainer />
        <Switch>
          <Route path="/" component={index} exact />
          <Route path="/register" component={registerPage} />
          <Route path="/login" component={loginPage} />
          <Route path="/post" component={postList} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
