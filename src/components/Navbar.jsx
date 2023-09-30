import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-black w-full">
        <div className="bg-black pl-[53rem] h-12 fixed py-3 w-full space-x-5 text-white z-10">
          <a href="/about_us">Home</a>
          <select name="Idea" id="idea" className="bg-black">
            <option value="Bucket List">Bucket List</option>
            <option value="Bucket List">Done List</option>
            <option value="Bucket List">Impossible List</option>
          </select>
          <a href="/sign_in">About Us</a>
          <a href="/sign_in">Sign In</a>
          <a href="/sign_up">Sign up</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
