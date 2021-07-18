import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

import Logo from '../../images/logo.svg';

const Menu: FunctionComponent = () => (
  <nav>
    <div id='cont'>
      <NavLink to='/' title='Home'>
        <img src={Logo} alt='Logo T.O.P.E.' />
      </NavLink>
      <ul>
        <li key='quem_somos' className='menu_option'>
          <NavLink activeClassName='active_option' to='/about'>
            QUEM SOMOS
          </NavLink>
        </li>
        <li key='produtos' className='menu_option'>
          <NavLink activeClassName='active_option' to='/product'>
            PRODUTOS
          </NavLink>
        </li>
        <li key='contato' className='menu_option'>
          <NavLink activeClassName='active_option' to='/contact'>
            CONTATO
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Menu;
