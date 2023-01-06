import React from 'react';
import { Contact } from './Contact';
import PropTypes from 'prop-types';
import { useGetContactsQuery } from 'redux/phonebookAPI';
import { List } from '@mui/material';

export const Contacts = ({ filter }) => {
  const { data, error, isLoading } = useGetContactsQuery();

  let visibleContacts = {};
  if (data) {
    visibleContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  return (
    <List sx={{ width: '100%', maxWidth: 600 }}>
      {data &&
        visibleContacts.map(contact => {
          return (
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              key={contact.id}
            ></Contact>
          );
        })}

      {error && <p>Sorry. Something is wrong... ${error}</p>}

      {isLoading && <p>Loading...Please wait...</p>}
    </List>
  );
};
Contacts.propTypes = {
  filter: PropTypes.string,
};
