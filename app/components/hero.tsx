"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Highlight } from "./ui/hero-highlight";
import { Rowdies } from "next/font/google";
import Iam from "./iam";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export function BackgroundHero({ id }: { id: string }) {
  return (
    <div id={id}>
      <BackgroundBeamsWithCollision>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
            Hello Worlds, My Name
          </h1>
          <Highlight
            className={`${rowdies.className} text-xl md:text-2xl lg:text-4xl font-bold mt-3 p-2 mb-3`}
          >
            Aidiel Putra Perdana.
          </Highlight>
          <Iam />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
