import Image from "next/image";
import { BackgroundHero } from "./components/hero";
import Iam from "./components/iam";
import AboutMe from "./components/aboutMe";
import Skill from "./components/skill";

export default function Home() {
  return (
    <div>
      <BackgroundHero></BackgroundHero>
      <AboutMe />
      <Skill />
    </div>
  );
}
