import "./Subscribe.css";
import {EmailInput} from "./../EmailInput/EmailInput.jsx";
import {Button} from "../Button/Button";

export function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-title">
          <p className="subscribe-headline">Будьте в курсе</p>
          <h2 className="subscribe-subtitle">
            <span className="highlight-text">Подпишитесь</span> на наши новости
          </h2>
        </div>
        <p className="subscribe-text">
          Чтобы всегда быть в курсе дел и обновлении законов.
        </p>
        <form className="subscribe-form">
          <EmailInput placeholder="Ваш e-mail"/>
          <Button>Подписаться</Button>
        </form>
      </div>
    </div>
  );
}
