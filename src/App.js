import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loginPage from '@pages/auth/loginPage';
import registerPage from '@pages/auth/registerPage';

import GlobalStyles from '@styles/GlobalStyles';
import index from './pages';
import Layout from './components/Layout';
import HeaderContainer from './containers/HeaderContainer';
import postList from './pages/posts/postList';
import postDetail from './pages/posts/postDetail';
import postWrite from './pages/posts/postWrite';

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
          <Route path="/posts" component={postList} />
          <Route path="/post/:postId" component={postDetail} />
          <Route path="/write" component={postWrite} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
