import "./PopUpRequest.css";
import {Modal} from "../Modal/Modal";
import {Button} from "../Button/Button";
import {PhoneInput} from "../PhoneInput/PhoneInput";
import {EmailInput} from "../EmailInput/EmailInput";
import {NameInput} from "../NameInput/NameInput";

export function PopUpRequest({active, setActive}) {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="pop-up-container">
        <form className="pop-up-content">
          <h2 className="pop-up-title">
            Оставьте заявку <br />
            <span className="highlight-text">мы с вами свяжемся</span>
          </h2>
          <div className="pop-up-inputs">
            <NameInput placeholder="Ваше имя" />
            <PhoneInput
              mask="+{7} (000) 000-00-00"
              definitions={{0: /[0-9]/}}
            />
            <EmailInput placeholder="Ваш e-mail" />
          </div>
          <Button>Отправить</Button>
        </form>
      </div>
    </Modal>
  );
}
