import './App.css';
import { useState } from 'react';
import axios from './api/axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get();
      setData(res.data.articles);
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
        {data && (
          <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
        )}
      </div>
    </div>
  );
}

export default App;
