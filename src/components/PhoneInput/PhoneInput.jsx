import {Input} from "./../Input/Input.jsx";
import {useEffect, useRef} from "react"
import IMask from "imask";

export function PhoneInput(props) {
    const inputRef = useRef(null);
    const {mask="+{7} (000) 000-00-00", definitions={0: /[0-9]/}} = props;

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
  }, 
  [mask, definitions]);
  return (
    <Input
      type="tel"
      ref={inputRef}
    ></Input>
  );
}
