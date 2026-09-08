import "./Header.css";
import searchIcon from "../assets/icons/search.svg";
import shoppingBasket from "../assets/icons/shopping-basket.svg";
import mobileMenu from "../assets/icons/mobile-menu.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link className="header__logo" to="/ ">
            Avion
          </Link>
          <div className="header__wrapper">
            <ul className="header__actions">
              <li>
                <Link className="header__search">
                  <img src={searchIcon} alt="search" />
                </Link>
              </li>
              <li>
                <Link to="/basket">
                  <img src={shoppingBasket} alt="shopping basket" />
                </Link>
              </li>
              <li>
                <Link className="header__mobile-menu">
                  <img src={mobileMenu} alt="mobile menu" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <ul className="header__nav">
            <li className="header__nav-item">
              <a href="" className="header__nav-link">
                Plant pots
              </a>
            </li>
            <li className="header__nav-item">
              <a href="" className="header__nav-link">
                Ceramics
              </a>
            </li>
            <li className="header__nav-item">
              <a href="" className="header__nav-link">
                Tables
              </a>
            </li>
            <li className="header__nav-item">
              <a href="" className="header__nav-link">
                Chairs
              </a>
            </li>
            <li className="header__nav-item">
              <a href="" className="header__nav-link">
                Crockery
              </a>
            </li>
            <li className="header__nav-item">
              <a href="" className="header__nav-link">
                Tableware
              </a>
            </li>
            <li className="header__nav-item">
              <a href="" className="header__nav-link">
                Cutlery
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
