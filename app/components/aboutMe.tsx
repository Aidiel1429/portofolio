"use client";
import React from "react";
import Tooltip from "./sosmed";

const AboutMe = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="lg:flex lg:justify-center lg:items-center p-14 lg:h-auto"
    >
      <div className="flex justify-center items-center">
        <img src="/images/img.png" width={380} alt="" />
      </div>
      <div className="divider lg:hidden"></div>
      <div className="divider divider-horizontal px-32 lg:flex"></div>
      <div className="md:px-20 lg:px-0 lg:w-96">
        <div className="mb-5">
          <h1 className="font-bold text-2xl mb-2">About Me</h1>
          <div className="text-sm">
            <p>
              Hi everyone, my name is Aidiel Putra Perdana. I live in Kampar,
              Riau, Indonesia. I am a Junior Front End Developer. Coding is my
              hobby since I was 15 years old.
            </p>
            <p>
              I study at SMKN 1 Bangkinang City and majored in Game and Software
              Development
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-2">Let's Be Friend</h1>
          <Tooltip />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
