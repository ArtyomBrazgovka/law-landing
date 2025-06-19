import "./Blocks.css";

export function Blocks(props) {
  const {source, title} = props;
  return (
    <div className="blocks">
      <div className="blocks-container">
        <img class="blocks-icon" src={source} alt="иконка"></img>
        <p class="blocks-title">{title}</p>
      </div>
    </div>
  );
}
