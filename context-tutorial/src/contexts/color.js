import { createContext } from 'react';

// 파라미터에는 해당 Context의 기본 상태를 지정
const ColorContext = createContext({ color: 'black' });

export default ColorContext;
