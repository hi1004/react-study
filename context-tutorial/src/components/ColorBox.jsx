import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          backgroundColor: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
