import {useState} from "react";
import "./Reviews.css";
import {Review} from "./Rewiew/Review";
import julia from "/images/decorations/julia_vorobjova.webp";
import director from "/images/decorations/director.webp";
import anna_dmitrievna from "/images/decorations/anna_dmitrievna.webp";

export function Reviews() {
  const reviewsData = [
    {
      id: 1,
      name: "Юлия Воробьева",
      description: "Директор компании “Воробьева и ко”",
      text: "Я обеспечу представление Ваших интересов в судах общей юрисдикции, арбитраже, третейском суде, приму участие в переговорах, окажу помощь на стадии досудебного урегулирования споров.",
      photo: julia,
    },
    {
      id: 2,
      name: "Иван Иванов",
      description: "CEO компании “Рога и копыта”",
      text: "Отличный сервис! Очень доволен результатом. Рекомендую всем своим партнерам.",
      photo: director,
    },
    {
      id: 3,
      name: "Анна Петрова",
      description: "Глава какой-то корпорации",
      text: "Быстро и качественно выполнили работу. Спасибо за профессионализм!",
      photo: anna_dmitrievna,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

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
          <button className="reviews-left-arrow" onClick={prevReview}>
            ←
          </button>
          <div className="reviews-block">
            <div className="reviews-rectangle"></div>
            <div className="reviews-comment">
              <div className="reviews-first-quote">“</div>
              <div className="reviews-second-quote">„</div>
              <div className="reviews-cutout"></div>
              <Review {...reviewsData[currentReviewIndex]} />
            </div>
          </div>
          <button className="reviews-right-arrow" onClick={nextReview}>
            →
          </button>
        </div>
        <div className="reviews-buttons">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              style={{transform: `translateX(-${index * 100}%)`}}
              className={`reviews-dot ${
                index === currentReviewIndex ? "active" : ""
              }`}
              onClick={() => setCurrentReviewIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
