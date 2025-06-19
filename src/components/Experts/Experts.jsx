import "./Experts.css";
import {Button} from "../Button/Button";
import {ExpertCard} from "./ExpertCard/ExpertCard";
import kiril_aleksandrovich from "/images/decorations/kiril_aleksandrovich.webp";
import anna_dmitrievna from "/images/decorations/anna_dmitrievna.webp";
import ivan_vasilievich from "/images/decorations/ivan_vasilievich.webp";
import lubov_yurievna from "/images/decorations/lubov_yurievna.webp";

export function Experts() {
  return (
    <div className="experts-section">
      <div className="experts-container">
        <div className="experts-content">
          <div className="experts-title">
            <div className="experts-headline">
              <div></div>
              <p>Наша команда</p>
            </div>
            <h2 className="experts-subtitle">
              Наши специалисты <br /> знают
              <span className="highlight-text"> своё дело</span>
            </h2>
          </div>
          <div className="experts-text">
            <p>
              Я обеспечу представление Ваших интересов в судах общей юрисдикции,
              арбитраже, третейском суде, приму участие в переговорах.
            </p>
          </div>
          <Button>Заказать звонок</Button>
        </div>
        <div className="experts-team">
          <ExpertCard
            name="КИРИЛЛ АЛЕКСАНДРОВИЧ"
            experience="27 лет стажа"
            source={kiril_aleksandrovich}
          />
          <ExpertCard
            name="Любовь Юрьевна"
            experience="18 лет стажа"
            source={lubov_yurievna}
          />
          <ExpertCard
            name="Иван Васильевич"
            experience="17 лет стажа"
            source={ivan_vasilievich}
          />
          <ExpertCard
            name="Анна Дмитриевна"
            experience="12 лет стажа"
            source={anna_dmitrievna}
          />
          <ExpertCard
            name="КИРИЛЛ АЛЕКСАНДРОВИЧ"
            experience="27 лет стажа"
            source={kiril_aleksandrovich}
          />
          <ExpertCard
            name="Любовь Юрьевна"
            experience="18 лет стажа"
            source={lubov_yurievna}
          />
        </div>
      </div>
    </div>
  );
}
