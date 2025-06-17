import "./Director.css";

import director from "/images/director.webp";
import signature from "/images/signature.webp";

export function Director() {
  return (
    <div className="director-section">
      <div className="director-picture">
        <div className="director-background"></div>
        <div className="director-photo">
          <img className="director-img" src={director}></img>
        </div>
      </div>

      <div className="director-content">
        <div className="first-quote">
          <p>“</p>
        </div>
        <div className="second-quote">
          <p>„</p>
        </div>
        
        <div className="director-title">
          <div className="director-headline">
            <div></div>
            <p>Слово руководителя</p>
          </div>
          <h2 className="director-subtitle">
            Потому что нам <br />
            <span className="highlight-text">не все равно</span>
          </h2>
        </div>
        <div className="director-promise">
          <p>
            Я обеспечу представление Ваших интересов в судах общей юрисдикции,
            арбитраже, третейском суде, приму участие <br />в переговорах, окажу
            помощь на стадии досудебного урегулирования споров.
          </p>
        </div>
        <div className="director-name">
          <h3>Жемчужин Василий Яковлевич</h3>
          <p>Генеральный директор</p>
        </div>
        <div className="director-signature">
          <img src={signature} alt="Подпись"></img>
        </div>
      </div>
    </div>
  );
}
