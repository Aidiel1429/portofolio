import { BackgroundHero } from "./components/hero";
import AboutMe from "./components/aboutMe";
import Skill from "./components/skill";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <BackgroundHero id="home" />
      <AboutMe id="about" /> {/* Tambahkan id di sini */}
      <Skill /> {/* Tambahkan id di sini */}
    </div>
  );
}
