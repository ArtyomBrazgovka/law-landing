import "./Articles.css";
import {Button} from "../Button/Button";
import { Article } from "./Article/Article";
import firstArticle from "/images/backgrounds/first-article.webp"
import secondArticle from "/images/backgrounds/second-article.webp"
import thirdArticle from "/images/backgrounds/third-article.webp"
import fourthArticle from "/images/backgrounds/fourth-article.webp"

export function Articles() {
  return (
    <div className="articles-section">
      <div className="articles-container">
        <div className="articles-top">
          <div className="articles-title">
            <div className="articles-headline">
              <div></div>
              <p>Наш блог</p>
            </div>
            <h2 className="articles-subtitle">
              <span className="highlight-text">Полезно</span> знать
            </h2>
          </div>
          <Button className="articles-button">Читать больше</Button>
        </div>
        <div className="articles-content">
            <Article source={firstArticle} date="15 апреля" title={"Как использовать закон \nв свою пользу?"} color="white"/>
            <Article source={secondArticle} date="09 апреля" title={"библиотека юриста. \nЧто почитать?"}/>
            <Article source={thirdArticle} date="06 марта" title={"на что обратить внимание \nв документах?"}/>
            <Article source={fourthArticle} date="23 февраля" title={"залог успешных дел наших \nюристов?"}/>
        </div>
      </div>
    </div>
  );
}
