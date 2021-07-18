import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Menu from './components/Menu';
import PageFooter from './components/PageFooter';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path='/' exact component={Main} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}
