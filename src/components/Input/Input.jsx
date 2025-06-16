import "./Input.css";

export function Input(props) {
  

  const {type, innerRef} = props;
  return (
    <input
      type={type}
      className="input"
      ref={innerRef}
      required
    ></input>
  );
}
