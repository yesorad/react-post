import React from 'react';
import { Route, Switch } from 'react-router-dom';
import test from './pages/test';

import GlobalStyles from '@styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={test} exact />
      </Switch>
    </>
  );
}

export default App;
