import "./HeroContent.css";

import "./BlockNumber/BlockNumber.jsx";
import {BlockNumber} from "./BlockNumber/BlockNumber.jsx";

import statue from "/images/statue.webp";

import lists from "/images/lists.webp";

import {Button} from "../../Button/Button.jsx";
import {PhoneInput} from "../../PhoneInput/PhoneInput.jsx";

export function HeroContent() {
  return (
    <div className="container-hero-content">
      <div className="titles">
        <div className="upper-title">
          <h1>Решим любой правовой вопрос</h1>
        </div>
        <div className="lower-title">
          <p>Помощь в решении любого правового вопроса в вашу пользу</p>
        </div>
      </div>
      <div className="request">
        <p className="request-title">Нужна консультация?</p>
        <form className="request-form">
          <PhoneInput
            className="request-phone"
            mask="+{7} (000) 000-00-00"
            definitions={{0: /[0-9]/}}
          />
          <Button>Заказать звонок</Button>
        </form>
      </div>
      <div className="numbers">
        <BlockNumber number="89%" title="Выигранных дел" />
        <BlockNumber number="34" title="Сотрудника в штате" />
        <BlockNumber number="18" title="Лет на рынке" />
      </div>
      <div className="statue">
        <img className="lists" src={lists} alt="Листы"></img>
        <img className="statue-img" src={statue} alt="Статуя"></img>
      </div>
    </div>
  );
}
