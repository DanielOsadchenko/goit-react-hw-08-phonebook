import {useState} from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useAddContactMutation } from 'redux/phonebookAPI';

export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation()

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addContact({
            name,
            number,
          });
      alert('Contact added!')
    }
    catch (error) {
      console.log(error)
    }
    setName('');
    setNumber('');
  }

  

  return <form onSubmit={handleSubmit}>
    <label>Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeName}
        value={name}
      />
    </label>
    <label>Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeNumber}
        value={number}
      />
    </label>
    <button type="submit">Add contact</button>
  </form>
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}