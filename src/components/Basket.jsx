import "./Basket.css";
import BasketItem from "./BasketItem";

function Basket({ basket, setBasket }) {
  const subtotal = basket.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <section className="basket">
      <div className="container">
        <h1 className="basket__title">Your shopping cart</h1>
        <ul className="basket__list">
          {basket.map((product) => {
            return (
              <BasketItem
                basket={basket}
                setBasket={setBasket}
                product={product}
                key={product.id}
              />
            );
          })}
        </ul>
        <div className="basket__summery">
          <p className="basket__subtotal">
            Subtotal <span>£{subtotal}</span>
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
