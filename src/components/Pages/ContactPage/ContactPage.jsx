import { Container, Typography, Box } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { useState } from 'react';
export const ContactPage = () => {
  const [filter, setFilter] = useState('');
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm />

      <Box sx={{ display: 'flex' }}>
        <Typography variant="h3" component="h2" mr={4} gutterBottom>
          Contacts
        </Typography>
        <Filter saveFilter={setFilter} />
      </Box>
      <Contacts filter={filter} />
    </Container>
  );
};
