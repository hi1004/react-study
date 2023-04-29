import './App.css';
import OrderPage from './pages/OrderPage';
import SummaryPage from './pages/SummaryPage';

function App() {
  return (
    <div style={{ padding: '4rem' }} className="App">
      <OrderPage />
      <SummaryPage />
    </div>
  );
}

export default App;
