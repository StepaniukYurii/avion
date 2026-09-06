import "./Banner.css";
import bannerIcon from "../assets/icons/banner-icon.svg";
import closeIcon from "../assets/icons/close-icon.svg";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <img src={bannerIcon} alt="banner" className="banner__logo" />
          <p className="banner__text">
            Free delivery on all orders over £50 with code easter checkout
          </p>
          <button className="banner__close-btn">
            <img src={closeIcon} alt="close" className="banner__close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
