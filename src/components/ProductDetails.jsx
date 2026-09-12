import "./ProductDetails.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ basket, setBasket }) {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const currentProduct = products.find((product) => {
    if (product.id === Number(params.id)) {
      return product;
    }
  });
  return (
    <section className="product-details">
      <div className="container">
        <div className="product-details__wrapper">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="product-details__image"
          />
          <div className="product-details__info">
            <h2 className="product-details__title">{currentProduct.title}</h2>
            <p className="product-details__value">£{currentProduct.price}</p>
            <ul className="product-details__list">
              <li className="product-details__item">
                <h3 className="product-details__description">
                  Product description
                </h3>
                <p className="product-details__text">
                  {currentProduct.description}
                </p>
              </li>
              <li className="product-details__item">
                <h3 className="product-details__description">Dimensions</h3>
                <ul className="product-details__dimensions-list">
                  <li className="product-details__dimensions-item">
                    <p className="product-details__dimensions-text">Height</p>
                    <p className="product-details__dimensions-value">
                      {currentProduct.dimensions.height}cm
                    </p>
                  </li>
                  <li className="product-details__dimensions-item">
                    <p className="product-details__dimensions-text">Width</p>
                    <p className="product-details__dimensions-value">
                      {currentProduct.dimensions.width}cm
                    </p>
                  </li>
                  <li className="product-details__dimensions-item">
                    <p className="product-details__dimensions-text">Depth</p>
                    <p className="product-details__dimensions-value">
                      {currentProduct.dimensions.depth}cm
                    </p>
                  </li>
                </ul>
              </li>
              <li className="product-details__item">
                <h3 className="product-details__description">Quantitity</h3>
                <div className="product-details__quantity-controls">
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="product-details__quantity">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </li>
            </ul>
            <button
              onClick={() => {
                const findProduct = basket.find((item) => {
                  return item.id === currentProduct.id;
                });
                if (!findProduct) {
                  setBasket([
                    ...basket,
                    { ...currentProduct, quantity: quantity },
                  ]);
                } else {
                  setBasket(
                    basket.map((item) => {
                      if (item.id === currentProduct.id) {
                        return { ...item, quantity: quantity };
                      }
                      return item;
                    }),
                  );
                }
              }}
              className="product-details__button button"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
