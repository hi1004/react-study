import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

// Provider를 사용하면 Context의 value를 변경할 수 있다.
// Provider를 사용할 때는 value 값을 명시해 주어야 한다.
function App() {
  return (
    <div className="App">
      <ColorContext.Provider value={{ color: 'red' }}>
        <ColorBox />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
