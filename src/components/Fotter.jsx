import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Fotter = () => {
  return (
    <div className="bg-black absolute mt-[140rem] px-40 pt-12 h-96 text-white">
      <p>Phone:</p>
      <p>9876543221</p>

      <p className="mt-24">Address:</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quo
        illo minima tenetur temporibus consequatur quos omnis quas at. Minus
        voluptate necessitatibus reprehenderit labore illo perferendis eligendi
        autem possimus.
      </p>
      <div className="flex space-x-4 mt-12">
        <BsInstagram />
        <BsFacebook />
        <AiFillTwitterCircle />
        <BiLogoLinkedin />
      </div>
    </div>
  );
};

export default Fotter;
