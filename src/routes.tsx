import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Menu from './components/Menu';
import PageFooter from './components/PageFooter';

export default function Routes(): JSX.Element {
  return (
    <HashRouter>
      <Menu />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route
          path='/linkedin'
          component={() => {
            // eslint-disable-next-line max-len
            // eslint-disable-next-line operator-linebreak
            window.location.href =
              'https://www.linkedin.com/in/dante-souza-e-souza/';
            return null;
          }}
        />
        <Route
          path='/whatsapp'
          component={() => {
            window.location.href = 'https://wa.me/5511964483979?text=';
            return null;
          }}
        />
        <Route
          path='/repo'
          component={() => {
            // eslint-disable-next-line operator-linebreak
            window.location.href =
              'https://github.com/lokinmodar/store-landing-page/';
            return null;
          }}
        />
      </Switch>
      <PageFooter />
    </HashRouter>
  );
}
