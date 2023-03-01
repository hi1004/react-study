import React, { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const inputEl = useRef();
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value]
  );
  const onChange = useCallback(e => setValue(e.target.value), []);
  const onClick = useCallback(() => inputEl.current.focus());
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        ref={inputEl}
      />
      <button type="submit" onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
