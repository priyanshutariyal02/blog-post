import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-16 bg-black text-white flex justify-center items-center gap-12 text-lg font-semibold">
      <Link className="hover:text-rose-500 duration-150" to="/">Home</Link>
      <Link className="hover:text-rose-500 duration-150" to="/createblog">Create Blog</Link>
    </div>
  );
};

export default Navbar;
