import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import Register from "./Register";
import {useState} from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import TodoList from "./TodoList";
import UserProfile from "./UserProfile";
import Math from "./Math";

function App() {
    const [toHomePage,setToHomePage] = useState("false");

  return (
      <div className="App">
          {/*<h1>useContext Example</h1>*/}
          {/*<UserProfile/>*/}
          <BrowserRouter>
              <Navbar/>
              {/*<Link to={"/register"} onClick={()=>{setToHomePage(true)}}>Register</Link>*/}
              {/*<Link to={"/login"} onClick={()=>{setToHomePage(true)}}>Login</Link>*/}
              {/*{toHomePage===true&&<Link to={"/"} onClick={()=>{setToHomePage(false)}}>Homepage</Link>}*/}
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path={"/login"} element={<Login/>}/>
                  <Route path={"/register"} element={<Register/>}/>
                  <Route path={"/image"} element={<Image/>}/>
                  <Route path={"/todo"} element={<TodoList/>}/>
                  <Route path={"/math"} element={<Math/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
