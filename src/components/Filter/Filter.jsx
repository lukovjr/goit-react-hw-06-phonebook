import { InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addValue } from 'redux/filterSlice';
import { getFilters } from 'redux/selector';

export const Filter = () => {
  const filterValue = useSelector(getFilters);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(addValue(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <InputFilter type="text" value={filterValue} onChange={changeFilter} />
    </label>
  );
};
