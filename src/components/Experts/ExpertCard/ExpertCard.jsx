import "./ExpertCard.css";

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
