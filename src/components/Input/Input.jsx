import "./Input.css";

export function Input(props) {
  const {type, ref} = props;
  return (
    <input {...props} type={type} className="input" ref={ref} required></input>
  );
}
