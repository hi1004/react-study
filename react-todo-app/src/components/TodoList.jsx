import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
