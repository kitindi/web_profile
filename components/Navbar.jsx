import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="">
          <Image src={assets.logo2_white} alt="logo" className="w-28 cursor-pointer mr-14" />
        </a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div>
          <a href="#contac">
            {" "}
            Contact <Image src={assets.arrow_icon} className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
