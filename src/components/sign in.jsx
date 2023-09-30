import React from "react";
import { useState } from "react";
import { over } from "../api";
const Sign_in = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [Date, setDate] = useState("");
  const [Mail, setMail] = useState("");
  const [Number, setNumber] = useState("");
  const [Prior, setPrior] = useState("");

  const handleName = (name) => {
    setUname(name.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handlePrior = (e) => {
    setPrior(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    over({
      username: uname,
      password: password,
      dob: Date,
      email:Mail,
      phone:Number,
      priority:Prior
    });
  };
  
  return (
    <div className="bg-red-200 h-[51rem] pl-40">
      <div className="bg-gray-200 absolute w-[30rem] ml-80 mt-56 px-36 py-8  h-[19rem]">
        <form method="post" className="space-y-4 px-3" >
          <input
            type="text"
            required
            name="username"
            onChange={handleName}
            placeholder="Username"
            id="uname"
            className="block w-44 pl-9"
          />
          <input
            type="password"
            required
            name="password"
            onChange={handlePass}
            placeholder="Password"
            id="password"
            className="block w-44 pl-9"
          />
          <input
          required
            type="date"
            name="dob"
            onChange={handleDate}
            id="dob"
            className="block w-44 pl-9"
          />
          <input
            type="email"
            required
            name="email"
            onChange={handleMail}
            placeholder="Email Id"
            id="mail"
            className="block w-44 pl-9"
          />
          <input
            type="tel"
            name="phone"
            onChange={handleNumber}
            placeholder="Phont Number"
            id="number"
            className="block w-44 pl-9"
          />
          <input
            type="text"
            name="prior"
            onChange={handlePrior}
            placeholder="Your Preferences"
            id="prior"
            className="block w-44 pl-9"
          />
          <input type="submit" onClick={submit} className="bg-blue-300 ml-14" />
        </form>
      </div>
    </div>
  );
};

export default Sign_in
