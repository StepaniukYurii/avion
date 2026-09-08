import "./Hero.css";
import heroImg from "../assets/images/hero-image.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className="hero__text">
          With our new collection, view over 400 bespoke pieces from homeware
          through to furniture today
        </p>
        <Link to="all-products" className="hero__view-button button">
          View collection
        </Link>
        <img src={heroImg} alt="" className="hero__image" />
      </div>
    </section>
  );
}

export default Hero;
