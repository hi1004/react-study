import './App.css';
import MyComponent from './components/MyComponent';
import Say from './components/Say';

function App() {
  return (
    <>
      <MyComponent name="OhByeongHeon" favoriteNumber={7}>
        React
      </MyComponent>
      <Say />
    </>
  );
}

export default App;
