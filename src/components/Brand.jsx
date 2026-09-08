import "./Brand.css";
import { Link } from "react-router-dom";

function Brand() {
  return (
    <section className="brand">
      <div className="container">
        <h1 className="brand__title">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>
        <Link to="/all-products" className="brand__button button">
          View our products
        </Link>
      </div>
    </section>
  );
}
export default Brand;
