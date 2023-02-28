import React, { useState } from 'react';
// import { useReducer } from 'react';
import useCustomHook from './useCustomHook';

// const reducer = (state, action) => {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// };

const UseStateHook = () => {
  const [value, setValue] = useState(0);
  // const [state, dispatch] = useReducer(reducer, {
  //   name: '',
  //   nickname: '',
  // });
  const [state, handleChange] = useCustomHook({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  // const handleChange = e => dispatch(e.target);
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

export default UseStateHook;
