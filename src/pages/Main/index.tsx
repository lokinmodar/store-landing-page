import React from 'react';
import OffersCarousel from '../../components/OffersCarousel';
import SectionContainer from '../../components/SectionContainer';
import ContactForm from '../../components/ContactForm';
import bflogo from '../../images/bflogo.png';

import './index.scss';

const Main = (): JSX.Element => (
  <>
    <img src={bflogo} alt='Blçack Friday Logo' id='bflogo' />
    <SectionContainer>
      <section id='content'>
        <OffersCarousel />
        <ContactForm />
      </section>
    </SectionContainer>
  </>
);
export default Main;
