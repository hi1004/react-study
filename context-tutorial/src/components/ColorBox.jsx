import React from 'react';
import { ColorConsumer } from '../contexts/color';

// Function as a child 또는 Render Props 패턴
const ColorBox = () => {
  return (
    <>
      <ColorConsumer>
        {({ state }) => (
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
        )}
      </ColorConsumer>
    </>
  );
};

export default ColorBox;
