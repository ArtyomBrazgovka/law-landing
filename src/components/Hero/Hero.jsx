import { Header } from "./../Header/Header.jsx";
import { HeroContent } from "./HeroContent/HeroContent.jsx";
import "./Hero.css";

export function Hero() {
  return (
    <div className="container">
      <div className="rectangle">
        <Header />
        <HeroContent />
      </div>
    </div>
  );
}
