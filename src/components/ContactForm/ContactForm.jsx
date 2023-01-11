import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid black;
  padding: 15px;
  gap: 15px;
`;

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('TestName');
  const [number, setNumber] = useState('12312321312');

  return (
    <>
      <Form
        name="add_contact_form"
        onSubmit={e => {
          onSubmit(e, name, number);
          setName('');
          setNumber('');
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
