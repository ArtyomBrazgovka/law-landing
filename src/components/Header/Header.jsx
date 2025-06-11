import './Header.css';
import Nav from "./Nav/Nav.jsx"
import logo from "./../../assets/headerLogo.png"

export default function Header()
{
    return (
        <header class="header">
            <div class="header-row">
                <a class = "header-logo-link" href ="."><img id = "header-logo" src = {logo} alt = "Логотип"></img> </a>
                <Nav />
                <p class="phone">+7 (999) 890 09 98</p>
            </div>
        </header>
    )
}