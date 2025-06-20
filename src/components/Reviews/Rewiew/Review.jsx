import "./Review.css";

export function Review({name, description, text, photo}) {
  return (
    <div className="review">
      <img className="review-photo" src={photo} alt={name} />
      <p className="review-text">{text}</p>
      <div className="review-info">
        <h3 className="review-name">{name}</h3>
        <p className="review-desciption">{description}</p>
      </div>
    </div>
  );
}
