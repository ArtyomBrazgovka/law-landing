import "./Button.css";
import clsx from "clsx";

export function Button({children, color, className, ...props}) {
  return (
    <button {...props} style={{color}} className={clsx("button", className)}>
      {children}
    </button>
  );
}
