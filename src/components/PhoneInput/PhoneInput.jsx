import {Input} from "./../Input/Input.jsx";

export function PhoneInput() {
  return (
    <Input
      mask="+{7} (000) 000-00-00"
      definitions={{0: /[0-9]/}}
      type="tel"
    ></Input>
  );
}
