import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

// https://localhost:3000/about?detail=true&mode=3
const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ detail: detail === 'true' ? false : true, mode });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === 'null' ? 1 : Number(mode) + 1;
    setSearchParams({
      detail: detail === 'null' ? true : false,
      mode: nextMode,
    });
  };

  return (
    <div>
      <h1>about</h1>
      <p>about page</p>
      <p>현재 주소: {location.pathname}</p>
      <p>쿼리스트링: {location.search}</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
