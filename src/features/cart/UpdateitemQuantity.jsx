import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateitemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="ml-auto flex items-center justify-between">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="quantity w-7 text-center text-sm font-extrabold">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateitemQuantity;
