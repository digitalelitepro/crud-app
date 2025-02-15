import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
//Import Components
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import PostList from "./components/PostList";
import Posts from "./components/Posts";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav /> 
          <Routes>
              <Route exact  path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contacts" element={<Contacts />} />
              <Route exact path="/posts" element={<Posts />}>
                  <Route path="/postslist" element={<PostList />} />
              </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
