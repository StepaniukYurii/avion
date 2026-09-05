import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <h3 className="footer__nav-title">Categories</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  Crockery
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Furniture
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Homeware
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Plant pots
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Chairs
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <h3 className="footer__nav-title">Menu</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  New arrivals
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Best sellers
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Recently viewed
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Popular this week
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  All products
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__nav-item">
            <h3 className="footer__nav-title">Our company</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  About us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Vacancies
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Returns policy
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="footer__title">Join our mailing list</h2>
        <form action="" className="footer__form">
          <input
            type="email"
            placeholder="your@email.com"
            className="footer__input"
          />
          <button className="footer__button">Sign up</button>
        </form>
        <p className="footer__rights">Copyright 2022 Avion LTD</p>
      </div>
    </footer>
  );
}
export default Footer;
