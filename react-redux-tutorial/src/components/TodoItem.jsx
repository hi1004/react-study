import { useDispatch } from 'react-redux';
import { todoActions } from '../store/reducers/todo';
import { useCallback } from 'react';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const removeHandler = useCallback(() => {
    dispatch(todoActions.remove(todo.id));
  }, [dispatch, todo.id]);

  const toggleHandler = useCallback(() => {
    dispatch(todoActions.toggle(todo.id));
  }, [dispatch, todo.id]);

  return (
    <li>
      <input
        type="checkbox"
        onClick={toggleHandler}
        id={todo.id}
        checked={todo.done}
        readOnly={true}
      />
      <label
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        htmlFor={todo.id}
      >
        {todo.text}
      </label>
      <button onClick={removeHandler}>삭제</button>
    </li>
  );
};

export default TodoItem;
