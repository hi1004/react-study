import React, { useCallback, useRef, useState } from 'react';

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
      setData(data => ({
        ...data,
        array: data.array.concat(info),
      }));

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
    setForm(form => ({
      ...form,
      [name]: [value],
    }));
  }, []);

  const onRemove = useCallback(id => {
    setData(data => ({
      ...data,
      array: data.array.filter(info => info.id !== id),
    }));
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
