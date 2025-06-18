import "./Header.css";
import { Nav } from "./Nav/Nav.jsx";
import logo from "/images/logos/logo.webp";

export function Header() {
  return (
    <header className="header">
      <div className="header-row">
        <a className="header-logo-link" href=".">
          <img id="header-logo" src={logo} alt="Логотип"></img>
        </a>
        <Nav />
        <p className="phone">+7 (999) 890 09 98</p>
      </div>
    </header>
  );
}
