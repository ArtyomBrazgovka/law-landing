import IMask from "imask";
import "./HeroContent.css";
import { useEffect, useRef } from 'react';
import "./BlockNumber/BlockNumber.jsx"
import { BlockNumber } from "./BlockNumber/BlockNumber.jsx";


export function HeroContent() {
    const phoneInputRef = useRef(null);

    useEffect(() => {
    if (!phoneInputRef.current) return;
    
    const mask = IMask(phoneInputRef.current, {
      mask: '+{7} (000) 000-00-00',
      lazy: false,
      definitions: {
        '0': /[0-9]/ 
      }
    });

    return () => {
      mask.destroy();
    };
  }, []);
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
          <input type="tel" className="request-phone" ref={phoneInputRef} required></input>
          

          <button className="request-send">Заказать звонок</button>
        </form>
      </div>
      
      <div className="numbers">
        <BlockNumber number="89%" title="Выигранных дел"/>
        <BlockNumber number="34" title="Сотрудника в штате"/>
        <BlockNumber number="18" title="Лет на рынке"/>
      </div>

      <div className="statue"></div>
    </div>
  );
}
