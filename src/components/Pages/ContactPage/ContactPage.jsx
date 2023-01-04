import ContactForm from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useState } from 'react';
export const ContactPage = () => {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <UserMenu />
      
      <h1>Phonebook</h1>
      <ContactForm/>

      <h2>Contacts</h2>
      <Filter saveFilter={setFilter} />
      <Contacts filter={filter} />

    </div>
  );
}