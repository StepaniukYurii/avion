import "./AllProducts.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import caretDown from "../assets/icons/caret-down.svg";
import SortingModal from "./SortingModal";

function AllProducts() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentModal, setCurrentModal] = useState(false);
  const [filtredProducts, setFiltredProducts] = useState(products);

  const input = ["Ceramics", "Lamps", "Chairs"];

  function practice(input) {
    return input.some((item) => {
      if (item == "Lamps") {
        return true;
      }
    });
  }
  console.log(practice(input));

  return (
    <section className="all-products">
      <div className="container">
        <h1 className="all-products__heading">View all products</h1>
        <div className="all-products__actions">
          <button
            onClick={() => {
              if (currentModal === "sorting") {
                setCurrentModal(false);
                return;
              }
              setCurrentModal("sorting");
            }}
            className="all-products__filters-btn"
          >
            Sorting
            <img src={caretDown} alt="Down" />
          </button>
          <SortingModal
            products={products}
            filtredProducts={filtredProducts}
            setFiltredProducts={setFiltredProducts}
            currentModal={currentModal}
          />
          <button
            onClick={() => {
              if (currentModal === "filtering") {
                setCurrentModal(false);
                return;
              }
              setCurrentModal("filtering");
            }}
            className="all-products__filters-btn"
          >
            Filtering
            <img src={caretDown} alt="Down" />
          </button>
        </div>
        <ul className="all-products__list">
          {filtredProducts.slice(0, visibleCount).map((product) => {
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
        {visibleCount < filtredProducts.length && (
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
