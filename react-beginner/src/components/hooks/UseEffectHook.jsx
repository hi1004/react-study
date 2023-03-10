import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [value, setValue] = useState(0);
  const [inputInfo, setInputInfo] = useState({
    name: '',
    nickname: '',
  });
  const handleChange = e => {
    setInputInfo({
      ...inputInfo,
      [e.target.name]: e.target.value,
    });
  };
  const { name, nickname } = inputInfo;

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    return () => {
      console.log('cleanup', 'unmount');
      console.log(name);
    };
  }, [name]);
  return (
    <div>
      <h1>현재 카운터 값은 {value} 입니다.</h1>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <div>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>
      <div>
        <b>닉네임: </b> {nickname}
      </div>
      <div>
        <b>카운터: </b> {value}
      </div>
    </div>
  );
};

export default UseEffectHook;
