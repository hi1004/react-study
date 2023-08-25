import Counter from './components/Counter';
import Todos from './components/Todos';
import Users from './components/Users';
import Post from './components/Post';

const App = () => {
  return (
    <div className="app">
      <Counter />
      <hr />
      <Todos />
      <hr />
      <Post />
      <hr />
      <Users />
    </div>
  );
};

export default App;
