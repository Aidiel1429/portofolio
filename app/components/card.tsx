import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import React from "react";
import { Meteors } from "./ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <IoLogoHtml5 className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <IoLogoCss3 className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <SiTailwindcss className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <FaBootstrap className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <IoLogoJavascript className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <FaPhp className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <FaLaravel className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
        <div className="relative shadow-xl w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 bg-black border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <RiNextjsFill className="text-white h-full w-full" />
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
