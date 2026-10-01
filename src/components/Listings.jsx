import "./Listings.css";
import { Link } from "react-router-dom";
import products from "../data/products";
function Listings(props) {
  const listingProducts = products.slice(0, 4);
  return (
    <section className="listings">
      <div className="container listings__container">
        {props.title && <h2 className="listings__heading">{props.title} </h2>}
        <ul className="listings__list">
          {listingProducts.map((product) => {
            return (
              <li key={product.id} className="listings__item">
                <img
                  src={product.image}
                  alt={product.title}
                  className="listings__image"
                />
                <h3 className="listings__title">{product.title}</h3>
                <p className="listings__price">£{product.price}</p>
              </li>
            );
          })}
        </ul>
        <Link to="/all-products" className="listings__button button">
          View collection
        </Link>
      </div>
    </section>
  );
}
export default Listings;
