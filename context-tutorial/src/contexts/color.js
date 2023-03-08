import { createContext, useState } from 'react';

// 파라미터에는 해당 Context의 기본 상태를 지정
const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorPorivider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor }, // 상태
    actions: { setColor, setSubcolor }, // 업데이트 함수
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorPorivider, ColorConsumer };

export default ColorContext;
