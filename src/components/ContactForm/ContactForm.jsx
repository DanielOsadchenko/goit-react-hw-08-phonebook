import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAddContactMutation } from 'redux/phonebookAPI';
import Notiflix from 'notiflix';
import { Button, TextField, Box } from '@mui/material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addContact({
        name,
        number,
      });
      Notiflix.Notify.success('Contact added!');
    } catch (error) {
      console.log(error);
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: '2rem' }}>
        <Box sx={{ display: 'flex' }}>
          <TextField
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
            value={name}
          />
          <TextField
            sx={{ ml: '1rem' }}
            label="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeNumber}
            value={number}
          />
        </Box>

        <Button
          sx={{ width: '100%', mt: '1rem' }}
          variant="contained"
          size="large"
          type="submit"
        >
          Add contact
        </Button>
      </Box>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
