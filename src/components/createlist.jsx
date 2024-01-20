import React from "react";

const createlist = () => {
  return (
    <>

      <div className="flex"> 

      <div className="bg-red-200 w-[70%] p-2 container grid grid-cols-4">
        <div className="bg-black h-52 m-1  p-3 text-white">a</div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1  "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1  "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1  "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1  "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1  "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1  "></div>
        <div className="bg-black h-52 m-1 "></div>
        <div className="bg-black h-52 m-1 "></div>
      </div>
      <div className="bg-green-200 w-[30%] fixed ml-[63rem] items-center p-2">
        <div className="text-3xl font-serif text-center mb-3">My Bucket List</div>
        <form action="get">
          <input type="text" name="name" id="name" placeholder="Enter Name" className="block m-1 mb-3 p-1 w-[100%]" />
          <input type="password" name="pass" placeholder="Password" className="block m-1 p-1 mb-3 w-[100%]"/>
          <input type="number" placeholder="Contact Number"className="block m-1 p-1 mb-3 w-[100%]" />
          <input type="email" placeholder="E-mail Id"className="block m-1 p-1 mb-3 w-[100%]" />
          <button className="w-[100%] bg-teal-800 m-1 p-2 text-white">Submit</button>
        </form>
      </div>

      </div>
    </>
  );
};

export default createlist;
