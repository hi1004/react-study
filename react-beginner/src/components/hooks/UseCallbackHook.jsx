import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.map(Number).reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
};

const UseCallbackHook = () => {
  const [lists, setLists] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef();

  const handleChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    inputEl.current.focus();
    if (number === '') return setLists([...lists, 0]);
    const nextList = [...lists, number];
    setLists(nextList);
    setNumber('');
  }, [lists, number]);

  const onEnter = e => {
    if (e.key === 'Enter') onInsert();
  };
  const avg = useMemo(() => getAverage(lists), [lists]);
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        onKeyDown={onEnter}
        ref={inputEl}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default UseCallbackHook;
