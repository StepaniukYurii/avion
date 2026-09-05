import "./Newsletter.css";
import check from "../assets/icons/check-mark.svg";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <h2 className="newsletter__title">
          Join the club and get the benefits
        </h2>
        <p className="newsletter__text">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="newsletter__list">
          <li className="newsletter__item">
            <img src={check} alt="check" className="newsletter__icon" />
            <p className="newsletter__item-text">Exclusive offers</p>
          </li>
          <li className="newsletter__item">
            <img src={check} alt="check" className="newsletter__icon" />
            <p className="newsletter__item-text">Free events</p>
          </li>
          <li className="newsletter__item">
            <img src={check} alt="check" className="newsletter__icon" />
            <p className="newsletter__item-text">Large discounts</p>
          </li>
        </ul>
        <form className="newsletter__form">
          <input
            type="mail"
            placeholder="your@email.com"
            className="newsletter__input"
          />
          <button type="submit" className="newsletter__button">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
