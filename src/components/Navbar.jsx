import React from "react";

const Navbar = () => {
  return (
    <>

      <div className="bg-black  h-12 fixed py-3 w-full space-x-5 text-white z-10">
        <select name="Idea" id="idea" className="bg-black">
          <option value="Bucket List">Bucket List</option>
          <option value="Bucket List">Done List</option>
          <option value="Bucket List">Impossible List</option>
        </select>
        {/* <Link to="/about_us">About Us</Link>
      <Link to="/sign_in">Sign In</Link>
      <Link to="/sign_up">Sign up</Link> */}
      </div>
    </>
  );
};

export default Navbar;
