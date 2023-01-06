import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/phonebookAPI';
import Notiflix from 'notiflix';
import { Button, ListItem, Typography } from '@mui/material';

export const Contact = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      Notiflix.Notify.success('Contact deleted!');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid black',
        mb: '0.5rem',
        borderRadius: '6px',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        minWidth={'10rem'}
        align={'center'}
      >
        {name}
      </Typography>
      <Typography
        variant="h6"
        component="div"
        minWidth={'10rem'}
        align={'center'}
      >
        {number}
      </Typography>
      <Button
        variant="contained"
        type="button"
        onClick={handleDelete}
        size={'small'}
      >
        Delete
      </Button>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDelete: PropTypes.func,
};
