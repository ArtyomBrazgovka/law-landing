import clsx from "clsx";
import {useState} from "react";
import "./Reviews.css";
import {Review} from "./Review/Review";
import {reviewsData} from "./reviews-data";

export function Reviews() {
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
          {reviewsData.map(({id}) => (
            <button
              key={id}
              className={clsx("reviews-dot", {
                active: id === reviewsData[currentReviewIndex].id,
              })}
              onClick={() => setCurrentReviewIndex(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
