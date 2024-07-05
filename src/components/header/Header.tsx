import { memo } from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__top"></div>
        <nav className="header__bottom">
          <a href="/" className="header-logo">
            <img src={logo} alt="" />
          </a>
          <ul className="navbar-lists">
            <li> <a href="">Понравилось</a> </li>
            <li> <a href="">личный кабинет</a> </li>
            <li> <a href="">настройки</a> </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
