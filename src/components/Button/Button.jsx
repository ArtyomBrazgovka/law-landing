import "./Button.css";
import clsx from "clsx";
import PropTypes from "prop-types";

export function Button({children, color = "black", className, ...props}) {
  return (
    <button {...props} style={{color}} className={clsx("button", className)}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
};
