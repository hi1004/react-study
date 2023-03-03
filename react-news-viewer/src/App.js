import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setData(res.data);
    } catch (e) {
      throw new Error(e);
    }
  };
  return (
    <div className="App">
      <div>
        <button type="button" onClick={onClick}>
          불러오기
        </button>
        {data && <textarea rows={7} value={JSON.stringify(data)} readOnly />}
      </div>
    </div>
  );
}

export default App;
