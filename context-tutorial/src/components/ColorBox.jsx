import React from 'react';
import ColorContext from '../contexts/color';

// Function as a child 또는 Render Props 패턴
const ColorBox = () => {
  return (
    <>
      <ColorContext.Consumer>
        {value => (
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: value.color,
            }}
          />
        )}
      </ColorContext.Consumer>
    </>
  );
};

export default ColorBox;
