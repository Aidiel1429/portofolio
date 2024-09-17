import React from "react";
import TypingEffect from "./ui/typingfEffect";

const Iam = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">I'am a </h1>
      <TypingEffect />
    </div>
  );
};

export default Iam;
