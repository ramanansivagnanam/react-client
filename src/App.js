import './App.css';
import PostList from './components/Posts/PostList';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
       <Posts />
       <PostList />
    </div>
  );
}

export default App;
