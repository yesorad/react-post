import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from '@pages/auth/LoginPage';

import GlobalStyles from '@styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Route path="/" component={LoginPage} exact />
    </>
  );
}

export default App;
