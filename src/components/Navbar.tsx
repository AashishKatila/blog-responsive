import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="md:px-32 px-8 h-20 text-offwhite flex items-center justify-between">
      <h2 className="md:text-3xl text-xl font-medium">BLOG</h2>
      <div className="flex items-center gap-6">
        <h2 className="md:text-lg ">All blogs</h2>
        <Button text="Login" />
      </div>
    </div>
  );
};

export default Navbar;
