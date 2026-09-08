import "./Story.css";
import interiorScene from "../assets/images/interior-scene.jpg";
import { Link } from "react-router-dom";

function Story() {
  return (
    <section className="story">
      <div className="container">
        <div className="story__wrapper">
          <h2 className="story__title">It started with a small idea</h2>
          <p className="story__text">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
          <Link to="/all-products" className="story__button button">
            View collection
          </Link>
        </div>
        <img
          src={interiorScene}
          alt="interior scene"
          className="story__image"
        />
      </div>
    </section>
  );
}
export default Story;
