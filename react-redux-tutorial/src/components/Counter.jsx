import { useDispatch, useSelector } from 'react-redux';
import { decrease, increaseAsync } from '../store/reducers/counter';

const Counter = () => {
  const number = useSelector(state => state.counter.number);

  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(increaseAsync());
  };

  const decreaseHandler = () => {
    dispatch(decrease());
  };
  return (
    <section>
      <h1>{number}</h1>
      <div>
        <button onClick={increaseHandler}>+</button>
        <button onClick={decreaseHandler}>-</button>
      </div>
    </section>
  );
};

export default Counter;
