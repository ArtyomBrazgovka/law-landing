import "./Article.css";
import {Button} from "../../Button/Button";
import PropTypes from "prop-types";

export function Article({source, date, title, color}) {
  return (
    <article className="article">
      <img className="article-img" src={source}></img>
      <div className="article-info">
        <p className="article-date">{date}</p>
        <p className="article-title" style={{color: color}}>
          {title}
        </p>
        <Button color={color}>Читать</Button>
      </div>
    </article>
  );
}

Article.propTypes = {
  source: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};
