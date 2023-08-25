import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { todoActions } from '../store/reducers/todo';
import { useCallback, useRef } from 'react';

const Todos = () => {
  const dispatch = useDispatch();
  const { input, todoList } = useSelector(state => state.todo);
  const inputEl = useRef();

  const changeHandler = useCallback(
    e => {
      dispatch(todoActions.changeInput(e.target.value));
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (input.trim().length !== 0) {
        dispatch(todoActions.insert());
        inputEl.current.focus();
      }
      dispatch(todoActions.changeInput(''));
    },
    [dispatch, input],
  );

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputEl}
          value={input}
          onChange={changeHandler}
        />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todoList.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
