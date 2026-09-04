import "./Story.css";
import interiorScene from "../assets/images/interior-scene.jpg";
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
          <button className="story__button">View collection</button>
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
