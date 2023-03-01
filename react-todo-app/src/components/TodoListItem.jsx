import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked, date } = todo;
  const { year, month, day } = date;

  return (
    <li className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem" onClick={() => onToggle(id)}>
        <div className={cn('checkbox', { checked })}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
          <div className="date">
            {year}/{month + 1}/{day}
          </div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </li>
  );
};

export default React.memo(TodoListItem);
