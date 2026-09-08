import "./AllProducts.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import caretDown from "../assets/icons/caret-down.svg";

function AllProducts() {
  const [visibleCount, setVisibleCount] = useState(8);
  console.log(products.length);
  return (
    <section className="all-products">
      <div className="container">
        <h1 className="all-products__heading">View all products</h1>
        <div className="all-products__actions">
          <button className="all-products__filters-btn">
            Sorting
            <img src={caretDown} alt="Down" />
          </button>
          <button className="all-products__filters-btn">
            Filtering
            <img src={caretDown} alt="Down" />
          </button>
        </div>
        <ul className="all-products__list">
          {products.slice(0, visibleCount).map((product) => {
            return (
              <li key={product.id} className="all-products__item">
                <Link
                  to={`/product/${product.id}`}
                  className="all-products__link"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="all-products__image"
                  />
                  <h3 className="all-products__title">{product.title}</h3>
                  <p className="all-products__price">£{product.price}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        {visibleCount < products.length && (
          <button
            onClick={() => setVisibleCount(visibleCount + 4)}
            className="all-products__button button"
          >
            View collection
          </button>
        )}
      </div>
    </section>
  );
}

export default AllProducts;
