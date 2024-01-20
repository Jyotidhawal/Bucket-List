
import Navbar from "./components/Navbar";
import Createlist from "./components/createlist";
import React from "react";
import Fotter from "./components/Fotter";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sign_in from "./components/sign in";
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Fotter/>
      {/* <Createlist/> */}
    </div>
  );
}

export default App;
