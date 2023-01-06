import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function Filter({ saveFilter }) {
  const handleFilter = e => {
    saveFilter(e.target.value);
  };
  return (
    <TextField
      variant="outlined"
      label="Find by name"
      type="text"
      name="filter"
      onChange={handleFilter}
    ></TextField>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};
