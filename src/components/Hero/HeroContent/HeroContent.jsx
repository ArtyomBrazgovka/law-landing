import "./HeroContent.css";

export function HeroContent() {
  return (
    <div className="container-hero-content">
      <div className="title">
        <div className="upper-title">
          <h1>Решим любой правовой вопрос</h1>
        </div>
        <div className="lower-title">
          <p>Помощь в решении любого правового вопроса в вашу пользу</p>
        </div>
      </div>
      <div className="request"></div>
      <div className="statue"></div>
      <div className="numbers"></div>
    </div>
  );
}
