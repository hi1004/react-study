import './App.css';
import EventPractice from './components/EventPractice';
import IterationSample from './components/IterationSample';
import MyComponent from './components/MyComponent';
import Say from './components/Say';
import ValidationSample from './components/ValidationSample';
import UseStateHook from './components/hooks/UseStateHook';

function App() {
  return (
    <>
      <MyComponent name="OhByeongHeon" favoriteNumber={7}>
        React
      </MyComponent>
      <Say />
      <EventPractice />
      <ValidationSample />
      <IterationSample />
      <UseStateHook />
    </>
  );
}

export default App;
