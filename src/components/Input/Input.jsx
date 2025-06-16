import IMask from "imask";
import {useEffect, useRef} from "react";
import "./Input.css";

export function Input(props) {
  const inputRef = useRef(null);

  const {mask, definitions, type} = props;

  useEffect(() => {
    if (inputRef.current && mask) {
      const maskInstance = IMask(inputRef.current, {
        mask,
        lazy: false,
        definitions,
      });

      return () => {
        maskInstance.destroy();
      };
    }
  }, [mask, definitions]);

  return (
    <input
      type={type}
      className="input"
      ref={inputRef}
      required
    ></input>
  );
}
