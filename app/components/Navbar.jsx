import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around items-center text-gray-800">
      <h1>Actions</h1>
      <ul className="flex space-x-4 items-center">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
