import "./Button.css";

export function Button(props) {
  const {children, color = "black"} = props;
  return (
    <button style={{color: color}} className="button">
      {children}
    </button>
  );
}
