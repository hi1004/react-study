import React, { useRef } from 'react';

const UseRefHook = () => {
  const id = useRef(1); // 로컬 변수
  const divEl = useRef(); // DOM 접근
  const setId = n => (id.current = n);
  const printId = () => console.log(id.current);
  setId(3);
  printId();
  return (
    <div id={id.current} ref={divEl}>
      MyComponent
    </div>
  );
};

export default UseRefHook;
