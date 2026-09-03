import "./Header.css";
import searchIcon from "../assets/icons/search.svg";
import shoppingBasket from "../assets/icons/shopping-basket.svg";
import userAvatar from "../assets/icons/user-avatar.svg";
import mobileMenu from "../assets/icons/mobile-menu.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <a className="header__logo" href="">
            Avion
          </a>
          <div className="header__wrapper">
            <button className="header__search">
              <img src={searchIcon} alt="search" />
            </button>

            <button className="header__mobile-menu">
              <img src={mobileMenu} alt="mobile menu" />
            </button>
          </div>
          <ul className="header__actions">
            <li>
              <a href="">
                <img src={shoppingBasket} alt="shopping basket" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={userAvatar} alt="User Avatar" />
              </a>
            </li>
          </ul>
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
