import './App.css';
import Nav from "./components/Nav";
import {useState} from "react";
import AllPosts from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import DeletePost from "./components/DeletePost";
import MyPosts from "./components/MyPosts";

function App() {

    const [state, setState] = useState('All posts')

  return (
    <div className="App">
        <Nav state={state} setState={setState} />
        {     state === 'All posts' ? <AllPosts />
            : state === 'Create post' ? <CreatePost />
            : state === 'Delete post' ? <DeletePost />
            : state === 'My posts' ? <MyPosts /> : null
        }
    </div>
  );
}

export default App;
