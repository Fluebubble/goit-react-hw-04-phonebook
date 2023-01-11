import React from 'react'
import PropTypes from 'prop-types'

export const SearchContact = ({ onFilter, filter }) => {
  return (
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={onFilter}
      value={filter}
      required
    />
  );
};

SearchContact.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}