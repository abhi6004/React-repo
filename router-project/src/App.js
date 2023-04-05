import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {

  const[isLoggedin,setIsLoggedin] = useState(false);

  return(
    <div>
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="singup" element={<Signup/>}/>
        <Route path="dashbord" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App;
