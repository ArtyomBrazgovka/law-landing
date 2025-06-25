import "./Contacts.css";
import map from "/images/backgrounds/map.webp";
import {PhoneInput} from "../PhoneInput/PhoneInput";
import {Button} from "../Button/Button";

export function Contacts() {
  return (
    <div className="contacts">
      <img className="contacts-map" src={map}></img>
      <div className="contacts-content">
        <div className="contacts-container">
          <div className="contacts-title">
            <div className="contacts-headline">
              <div></div>
              <p>На связи с вами</p>
            </div>
            <h2 className="contacts-subtitle">
              <span className="highlight-text">Контактная</span> информация
            </h2>
          </div>
          <div className="contacts-info">
            <p>
              Телефон <span className="highlight-text">+7 (999) 890 09 98</span>
            </p>
            <p>
              Почта <span className="highlight-text">info@ya.ru</span>
            </p>
            <p>
              Адрес{" "}
              <span className="highlight-text">Москва, ул. Арбат, д. 1</span>
            </p>
          </div>
          <div className="contacts-request">
            <p className="request-title">Нужна консультация?</p>
            <form className="request-form">
              <PhoneInput
                className="request-phone"
                mask="+{7} (000) 000-00-00"
                definitions={{0: /[0-9]/}}
              />
              <Button color="white">Заказать звонок</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
