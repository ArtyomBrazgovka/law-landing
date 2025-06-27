import "./Input.css";
import PropTypes from "prop-types";

export function Input(props) {
  const {type, ref} = props;
  return (
    <input type={type} className="input" ref={ref} required {...props}></input>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  ref: PropTypes.object,
};
