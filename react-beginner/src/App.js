import { useRef } from 'react';
import './App.css';
import EventPractice from './components/EventPractice';
import MyComponent from './components/MyComponent';
import Say from './components/Say';
import ValidationSample from './components/ValidationSample';

function App() {
  const box = useRef();
  console.log(box);

  return (
    <>
      <MyComponent name="OhByeongHeon" favoriteNumber={7}>
        React
      </MyComponent>
      <Say />
      <EventPractice />
      <ValidationSample />
    </>
  );
}

export default App;
