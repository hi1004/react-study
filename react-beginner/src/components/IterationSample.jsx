import React, { useState } from 'react';

const IterationSample = () => {
  const [fruits, setFruits] = useState([
    { id: 1, text: 'apple' },
    { id: 2, text: 'banana' },
    { id: 3, text: 'orange' },
    { id: 4, text: 'cherry' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const handleChange = e => setInputText(e.target.value);
  const handleClick = () => {
    const nextFruits = [...fruits, { id: nextId, text: inputText }];
    setNextId(nextId + 1);
    setFruits(nextFruits);
    setInputText('');
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter') handleClick();
  };
  const handleRemove = id => {
    const nextFruits = fruits.filter(fruit => fruit.id !== id);
    setFruits(nextFruits);
  };
  const fruitsList = fruits.map(fruit => (
    <li key={fruit.id} onDoubleClick={() => handleRemove(fruit.id)}>
      {fruit.text}
    </li>
  ));
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>추가</button>
      <ul>{fruitsList}</ul>;
    </>
  );
};

export default IterationSample;
