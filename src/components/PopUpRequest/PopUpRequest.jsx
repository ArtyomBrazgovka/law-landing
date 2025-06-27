import "./PopUpRequest.css";
import {Modal} from "../Modal/Modal";
import {Button} from "../Button/Button";
import {PhoneInput} from "../PhoneInput/PhoneInput";
import {EmailInput} from "../EmailInput/EmailInput";
import {NameInput} from "../NameInput/NameInput";
import PropTypes from "prop-types";

export function PopUpRequest({isActive, setActive}) {
  return (
    <Modal active={isActive} setActive={setActive}>
      <div className="pop-up-container">
        <form className="pop-up-content">
          <h2 className="pop-up-title">
            Оставьте заявку <br />
            <span className="highlight-text">мы с вами свяжемся</span>
          </h2>
          <div className="pop-up-inputs">
            <NameInput placeholder="Ваше имя" />
            <PhoneInput />
            <EmailInput placeholder="Ваш e-mail" />
          </div>
          <Button>Отправить</Button>
        </form>
      </div>
    </Modal>
  );
}

PopUpRequest.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
