import Image from "next/image";
import "./Hero.css";
import HeroCarousel from "./HeroCarousel";
const Hero = () => {
  return (
    <div className="hero_main_container">
      <HeroCarousel />
    </div>
  );
};

export default Hero;
