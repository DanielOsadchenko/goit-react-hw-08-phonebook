import PropTypes from 'prop-types';

export default function Filter ({saveFilter}) {
  


  const handleFilter = (e) => {
    saveFilter(e.target.value)
  }
  return <label>Find contacts by name <input
    type='text'
    name='filter'
    onChange={handleFilter}
  ></input></label>
    
}

Filter.propTypes = {
onFilter: PropTypes.func
}