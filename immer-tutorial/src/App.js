import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';

const App = () => {
  const [form, setForm] = useState({
    username: '',
    name: '',
  });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });
  const nextId = useRef(1);
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const { username, name } = form;
      const info = {
        id: nextId.current,
        username,
        name,
      };
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      setForm({
        username: '',
        name: '',
      });
      nextId.current++;
    },
    [form]
  );
  const onChange = useCallback(e => {
    const { name, value } = e.target;

    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);

  const onRemove = useCallback(id => {
    setData(
      produce(draft => {
        draft.array.splice(
          draft.array.findIndex(info => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <ul>
        {data.array.map(info => (
          <li key={info.id} onClick={() => onRemove(info.id)}>
            {info.username} ({info.name})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
