import "./Features.css";

import delivery from "../assets/icons/delivery.svg";
import checkmark from "../assets/icons/checkmark.svg";
import purchase from "../assets/icons/purchase.svg";
import sprout from "../assets/icons/sprout.svg";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="features__title">What makes our brand different</h2>
        <ul className="features__list">
          <li className="features__item">
            <img src={delivery} alt="" className="features__logo" />
            <h3 className="features__item-title">Next day as standard</h3>
            <p className="features__item-text">
              Order before 3pm and get your order the next day as standard
            </p>
          </li>
          <li className="features__item">
            <img src={checkmark} alt="" className="features__logo" />
            <h3 className="features__item-title">Made by true artisans</h3>
            <p className="features__item-text">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </li>
          <li className="features__item">
            <img src={purchase} alt="" className="features__logo" />
            <h3 className="features__item-title">Unbeatable prices</h3>
            <p className="features__item-text">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </li>
          <li className="features__item">
            <img src={sprout} alt="" className="features__logo" />
            <h3 className="features__item-title">Recycled packaging</h3>
            <p className="features__item-text">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Features;
