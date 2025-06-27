import "./Tiles.css";
import PropTypes from "prop-types";

export function Tiles(props) {
  const {source, title, description} = props;
  return (
    <div className="tiles">
      <div className="tiles-container">
        <img className="tiles-icon" src={source} alt="иконка"></img>
        <h3 className="tiles-title">{title}</h3>
        <p className="tiles-description">{description}</p>
      </div>
    </div>
  );
}

Tiles.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
