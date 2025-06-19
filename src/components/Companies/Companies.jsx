import "./Companies.css";
import {Blocks} from "./Blocks/Blocks.jsx";
import channel from "/images/icons/first-channel.webp";
import cooper from "/images/icons/mini-cooper.webp";
import psychology from "/images/icons/psychology.webp";
import sber from "/images/icons/sber.webp";
import skolkovo from "/images/icons/skolkovo.webp";
import valorant from "/images/icons/valorant.webp";

export function Companies() {
  return (
    <div className="companies-section">
      <div className="companies-container">
        <div className="companies-title">
          <p className="companies-headline">Нам доверяют</p>
          <h2 className="companies-subtitle">
            Они <span className="highlight-text">выбрали</span> нас
          </h2>
        </div>
        <div className="companies-blocks">
          <Blocks source={cooper} title="mini cooper" />
          <Blocks source={sber} title="Сбер" />
          <Blocks source={skolkovo} title="Сколково" />
          <Blocks source={psychology} title="psychology" />
          <Blocks source={valorant} title="valorant" />
          <Blocks source={channel} title="первый канал" />
        </div>
      </div>
    </div>
  );
}
