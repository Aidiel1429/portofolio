import React from "react";
import { HeroHighlight } from "./ui/hero-highlight";
import { MeteorsDemo } from "./card";

const Skill = () => {
  return (
    <div>
      <HeroHighlight>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-10">
          Skill
        </h1>
        <div>
          <MeteorsDemo />
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Skill;
