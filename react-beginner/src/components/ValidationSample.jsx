import React, { useRef, useState } from 'react';

import './ValidationSample.css';

const ValidationSample = () => {
  const [info, setInfo] = useState({
    password: '',
    clicked: false,
    validated: false,
  });
  const { password, clicked, validated } = info;
  const inputEl = useRef();
  const handleChange = e => {
    const nextPassword = {
      ...info,
      password: e.target.value,
    };
    setInfo(nextPassword);
  };
  const handleButtonClick = () => {
    const nextInfo = {
      ...info,
      clicked: true,
      validated: password === '0000',
    };
    setInfo(nextInfo);
    inputEl.current.focus();
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter') handleButtonClick();
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={clicked ? (validated ? 'success' : 'failure') : ''}
        ref={inputEl}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
