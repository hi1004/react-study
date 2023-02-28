import './App.css';
import EventPractice from './components/EventPractice';
import IterationSample from './components/IterationSample';
import MyComponent from './components/MyComponent';
import Say from './components/Say';
import ValidationSample from './components/ValidationSample';
import UseStateHook from './components/hooks/UseStateHook';
import UseEffectHook from './components/hooks/UseEffectHook';
import { useState } from 'react';

function App() {
  const [visibale, setVisibale] = useState(false);
  return (
    <>
      <MyComponent name="OhByeongHeon" favoriteNumber={7}>
        React
      </MyComponent>
      <Say />
      <EventPractice />
      <ValidationSample />
      <IterationSample />

      <h1>😀😀😀😀[Hooks]😀😀😀😀</h1>
      <UseStateHook />
      <div>
        <button onClick={() => setVisibale(!visibale)}>
          {visibale ? '숨기기' : '보이기'}
        </button>
        <hr />
      </div>
      {visibale && <UseEffectHook />}
    </>
  );
}

export default App;
