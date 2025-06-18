import "./Advantages.css"
import {Button} from "../Button/Button.jsx";
import { Tiles } from "./Tiles/Tiles.jsx";

import clock from "/images/icons/clock.webp"
import  briefcase from "/images/icons/briefcase.webp"
import  chess from "/images/icons/chess.webp"
import  book from "/images/icons/book.webp"

export function Advantages(){
    return(
        <div className="advantages-section">
            <div className="advantages-container">
                <div className="advantages-title">
                    <p className="advantages-headline">Наши преимущества</p>
                    <h2 className="advantages-subtitle">Почему <span className="highlight-text">выбирают</span> нас</h2>
                </div>
                <div className="advantages-tiles">
                    <Tiles source = {clock} title="круглосуточная поддержка" description={'Звонки по любым вопросам \nв удобное для вас время. \nМы всегда рядом'}/>
                    <Tiles source = {briefcase} title="Высокая экспертность" description={'Наши специалисты постоянно \nулучшают свои навыки и изучают \nновые подходы'}/>
                    <Tiles source = {chess} title="думаем на два шага вперед" description={'Звонки по любым вопросам \nв удобное для вас время. \nМы всегда рядом'}/>
                    <Tiles source = {book} title="Знания – наша сила" description={'Звонки по любым вопросам \nв удобное для вас время. \nМы всегда рядом'}/>
                </div>
                <Button>Заказать звонок</Button>
            </div>
        </div>
    )
}