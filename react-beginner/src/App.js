import './App.css';
import EventPractice from './components/EventPractice';
import IterationSample from './components/IterationSample';
import MyComponent from './components/MyComponent';
import Say from './components/Say';
import ValidationSample from './components/ValidationSample';
import UseStateHook from './components/hooks/UseStateHook';
import UseEffectHook from './components/hooks/UseEffectHook';
import { useState } from 'react';
import UseReducerHook from './components/hooks/UseReducerHook';
import UseMemoHook from './components/hooks/UseMemoHook';
import UseCallbackHook from './components/hooks/UseCallbackHook';
import UseRefHook from './components/hooks/UseRefHook';

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

      <h1>ππππ[Hooks]ππππ</h1>
      <UseStateHook />
      <div>
        <button onClick={() => setVisibale(!visibale)}>
          {visibale ? 'μ¨κΈ°κΈ°' : 'λ³΄μ΄κΈ°'}
        </button>
        <hr />
      </div>
      {visibale && <UseEffectHook />}
      <UseReducerHook />
      <UseMemoHook />
      <UseCallbackHook />
      <UseRefHook />
    </>
  );
}

export default App;
