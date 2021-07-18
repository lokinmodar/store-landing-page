import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

import './index.scss';
import LogoTope from '../../images/logo-tope-mini.svg';

const PageFooter: FunctionComponent = () => (
  <footer>
    {/*         <section id='footcont'>
          <div id='left'>LLL</div>
          <div id='center'>CCC</div>
          <div id='right'>RRR</div>
        </section> */}
    <section id='cont'>
      <div id='left'>
        <Link
          to='/facebook'
          target='_blank'
          rel='noopener noreferrer'
          title='Clique aqui para entrar em contato pelo Facebook.'
        >
          <FaFacebookSquare className='fb' />
        </Link>
        <Link
          to='/whatsapp'
          target='_blank'
          rel='noopener noreferrer'
          title='Clique aqui para enviar uma mensagem para mim.'
        >
          <FaWhatsappSquare className='wpp' />
        </Link>
      </div>
      <div id='center'>
        <p id='copy'>©{new Date().getFullYear()}- Dante Souza e Souza</p>
        <p id='mail'>dsouzaesouza@gmail.com</p>
      </div>
      <div id='right'>
        <p id='dev'>
          Site por:
          <br />
          Dante Souza e Souza
        </p>

        <div>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            to='/developer'
            title='The Old Pink Eye'
          >
            <img src={LogoTope} alt='Logo The Old Pink Eye' />
          </Link>
        </div>
      </div>
    </section>
  </footer>
);

export default PageFooter;
