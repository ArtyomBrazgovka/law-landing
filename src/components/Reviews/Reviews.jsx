import "./Reviews.css";
import julia from "/images/decorations/julia_vorobjova.webp";

export function Reviews() {
  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-title">
          <p className="reviews-headline">О нас говорят</p>
          <h2 className="reviews-subtitle">
            <span className="highlight-text">Отзывы</span> наших клиентов
          </h2>
        </div>
        <div className="reviews-content">
          <button className="reviews-left-arrow">←</button>
          <div className="reviews-block">
            <div className="reviews-rectangle"></div>
            <div className="reviews-comment">
              <div className="reviews-first-quote">“</div>
              <div className="reviews-second-quote">„</div>
              <div className="reviews-cutout"></div>
              <img className="reviews-photo" src={julia}></img>
              <div className="reviews-review">
                <p className="reviews-text">
                  Я обеспечу представление Ваших интересов в судах общей
                  юрисдикции, арбитраже, третейском суде, приму участие в
                  переговорах, окажу помощь <br />
                  на стадии досудебного урегулирования споров.
                </p>
                <div className="reviews-info">
                  <h3 className="reviews-name">Юлия Воробьева</h3>
                  <p className="reviews-desciption">
                    Директор компании “Воробьева и ко”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="reviews-right-arrow">→</button>
        </div>
        <div className="reviews-buttons"></div>
      </div>
    </div>
  );
}
