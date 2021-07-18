import React from 'react';
import OffersCarousel from '../../components/OffersCarousel';
import SectionContainer from '../../components/SectionContainer';
import ContactForm from '../../components/ContactForm';

const Main = (): JSX.Element => (
  <>
    <SectionContainer>
      <section id='content'>
        <h1>Hello!</h1>
        <OffersCarousel />
        <ContactForm />
      </section>
    </SectionContainer>
  </>
);
export default Main;
