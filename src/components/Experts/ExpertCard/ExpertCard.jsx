import "./ExpertCard.css";
import PropTypes from 'prop-types';

export function ExpertCard({source, name, experience}) {
  return (
    <div className="expert-card">
      <img className="expert-image" src={source}></img>
      <div className="expert-info">
        <h3 className="expert-name">{name}</h3>
        <p className="expert-experience">{experience}</p>
      </div>
    </div>
  );
}

ExpertCard.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
}