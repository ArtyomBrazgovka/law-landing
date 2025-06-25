import "./Button.css";

export function Button({children, color = "black"}) {
  return (
    <button style={{color: color}} className="button">
      {children}
    </button>
  );
}
