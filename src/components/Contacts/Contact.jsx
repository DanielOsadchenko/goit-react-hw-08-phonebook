import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/phonebookAPI';


export const Contact = ({ name, number, id}) => {
  
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      alert('Contact deleted!')
    }
    catch (error){ console.log(error) }
  } 
  return <li >
    <span>{name}: {number}</span>
    <button type='button' onClick={handleDelete}>Delete</button>
  </li>
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDelete: PropTypes.func
}