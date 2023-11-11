import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { getStatusFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const filterHandle = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <Label>
      {' '}
      Find contact: <Input type="text" value={filter} onChange={filterHandle} />
    </Label>
  );
};
