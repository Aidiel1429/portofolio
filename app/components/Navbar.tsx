import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-5 absolute top-0 z-50 right-10 left-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">AidielPtraPrdna.</h1>
        <div className="flex gap-7">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="">Skill</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
