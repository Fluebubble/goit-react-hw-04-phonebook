import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}{' '}
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
