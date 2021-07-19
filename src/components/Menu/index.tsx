import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

import Logo from '../../images/logo-tope-mini.svg';

const Menu: FunctionComponent = () => (
  <nav>
    <div id='cont'>
      <NavLink to='/' title='Home'>
        <img src={Logo} alt='Logo T.O.P.E.' />
      </NavLink>
    </div>
  </nav>
);
export default Menu;
