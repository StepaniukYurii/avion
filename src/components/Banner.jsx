import { useState } from "react";

import "./Banner.css";
import bannerIcon from "../assets/icons/banner-icon.svg";
import closeIcon from "../assets/icons/close-icon.svg";

function Banner() {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <img src={bannerIcon} alt="banner" className="banner__logo" />
          <p className="banner__text">
            Free delivery on all orders over £50 with code easter checkout
          </p>
          <button
            onClick={() => setVisible(false)}
            className="banner__close-btn"
          >
            <img src={closeIcon} alt="close" className="banner__close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
