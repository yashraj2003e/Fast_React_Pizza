import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
// import deleteIcon from '../../../public/delete.png';
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
