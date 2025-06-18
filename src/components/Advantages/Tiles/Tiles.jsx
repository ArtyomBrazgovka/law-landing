import "./Tiles.css";

export function Tiles(props) {
  const {source, title, description} = props;
  return (
    <div className="tiles">
      <div className="tiles-container">
        <img class="tiles-icon" src={source} alt="иконка"></img>
        <h3 class="tiles-title">{title}</h3>
        <p class="tiles-description">{description}</p>
      </div>
    </div>
  );
}
