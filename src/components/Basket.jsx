import "./Basket.css";
import products from "../data/products";
import { useState } from "react";
function Basket() {
  const [productCount, setProductCount] = useState(1);
  return (
    <section className="basket">
      <div className="container">
        <h1 className="basket__title">Your shopping cart</h1>
        <ul className="basket__list">
          {products.map((product) => {
            return (
              <li className="basket__item">
                <img
                  src={product.image}
                  alt={product.title}
                  className="basket__image"
                />
                <div className="basket__content">
                  <h2 className="basket__content-title">{product.title}</h2>
                  <p className="basket__content-prise">£{product.price}</p>
                  <div className="basket__quantity">
                    <button
                      onClick={() => setProductCount(productCount - 1)}
                      className="basket__button"
                    >
                      -
                    </button>
                    <span className="basket__value">{productCount}</span>
                    <button
                      onClick={() => setProductCount(productCount + 1)}
                      className="basket__button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="basket__summery">
          <p className="basket__subtotal">
            Subtotal <span>£210</span>
          </p>
          <p className="basket__notice">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="basket__checkout button">Go to checkout</button>
        </div>
      </div>
    </section>
  );
}
export default Basket;
