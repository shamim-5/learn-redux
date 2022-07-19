import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      <h3>Hello @reduxjs/toolkit</h3>
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
