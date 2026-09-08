import "./Origins.css";
import originsImage from "../assets/images/origins-image.jpg";

function Origins() {
  return (
    <section className="origins">
      <div className="container">
        <img src={originsImage} alt="interior image" />
        <div className="origins__wrapper">
          <h2 className="origins__title">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </h2>
          <p className="origins__text">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="origins__text origins__text-bottom">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <button className="origins__button button">Get in touch</button>
        </div>
      </div>
    </section>
  );
}
export default Origins;
