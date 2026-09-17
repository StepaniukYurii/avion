import "./Hero.css";
import heroImgMob from "../assets/images/hero-image-mob.jpg";
import heroImg from "../assets/images/hero-image.jpg";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p className="hero__text">
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
          <Link to="/all-products" className="hero__view-button button">
            View collection
          </Link>
        </div>
      </div>
      <picture>
        <source media="(min-width: 700px)" srcSet={heroImg} />
        <img src={heroImgMob} alt="Hero" className="hero__image" />
      </picture>
    </section>
  );
}

export default Hero;
