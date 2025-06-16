import "./Nav.css";

export function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a className="nav-link" href=".">
            Главная
          </a>
        </li>
        <li>
          <a className="nav-link" href=".">
            Услуги
          </a>
        </li>
        <li>
          <a className="nav-link" href=".">
            Сопровождение
          </a>
        </li>
        <li>
          <a className="nav-link" href=".">
            Полезное
          </a>
        </li>
        <li>
          <a className="nav-link" href=".">
            О компании
          </a>
        </li>
        <li>
          <a className="nav-link" href=".">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
