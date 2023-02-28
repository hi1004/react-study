import React from 'react';

const IterationSample = () => {
  const fruits = ['apple', 'banana', 'orange', 'cherry'];
  const fruitsList = fruits.map((fruits, index) => (
    <li key={index}>{fruits}</li>
  ));
  return <ul>{fruitsList}</ul>;
};

export default IterationSample;
