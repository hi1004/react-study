import './App.css';
import EventPractice from './components/EventPractice';
import MyComponent from './components/MyComponent';
import Say from './components/Say';

function App() {
  return (
    <>
      <MyComponent name="OhByeongHeon" favoriteNumber={7}>
        React
      </MyComponent>
      <Say />
      <EventPractice />
    </>
  );
}

export default App;
