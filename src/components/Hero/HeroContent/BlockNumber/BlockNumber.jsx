import "./BlockNumber.css";

export function BlockNumber(props) {
  return (
    <div className="block">
      <div className="number">
        <h2>{props.number}</h2>
      </div>
      <div className="title">
        <p>{props.title}</p>
      </div>
    </div>
  );
}
