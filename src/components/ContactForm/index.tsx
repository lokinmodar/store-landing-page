import React, { useState } from 'react';

import formValidation from '../../utils/formValidation';

import './index.scss';

const ContactForm = (): JSX.Element => {
  const [inputs, setInputs] = useState({ email: '' });

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    const validation = formValidation(inputs.email);
    if (validation) {
      window.localStorage.setItem('E-mail', JSON.stringify(inputs.email));

      console.log('Salvo!', inputs.email);
    } else {
      console.log('E-mail inválido');
    }
  };

  const handleInputChange = (e: {
    persist: () => void;
    target: { name: string; value: string };
  }): void => {
    e.persist();
    setInputs(() => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input
            type='email'
            name='email'
            placeholder='Digite seu endereço de E-mail'
            onChange={handleInputChange}
            value={inputs.email}
            onFocus={handleInputChange}
            onBlur={handleInputChange}
            title='Preencha este campo.'
            required
          />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </article>
  );
};

export default ContactForm;
