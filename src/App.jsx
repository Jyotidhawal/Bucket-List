
import Navbar from "./components/Navbar";

import React from "react";
import Fotter from "./components/Fotter";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sign_in from "./components/sign in";
function App() {
  return (
    <div >
      <Navbar />
      <Home/>
      {/* <Sign_in/>/ */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Sign_in />} />
      </Routes> */}
      <Fotter />
    </div>
  );
}

export default App;
