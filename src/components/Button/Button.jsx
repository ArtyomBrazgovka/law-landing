import "./Button.css";

export function Button({children, color = "black", ...props}) {
  return (
    <button style={{color}} className="button" {...props}>
      {children}
    </button>
  );
}
