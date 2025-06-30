import "./Blocks.css";
import PropTypes from 'prop-types';

export function Blocks(props) {
  const {source, title} = props;
  return (
    <div className="blocks">
      <div className="blocks-container">
        <img className="blocks-icon" src={source} alt="иконка"></img>
        <p className="blocks-title">{title}</p>
      </div>
    </div>
  );
}
