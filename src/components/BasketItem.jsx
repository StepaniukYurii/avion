function BasketItem({ basket, setBasket, product }) {
  console.log(basket);

  return (
    <li className="basket__item">
      <img src={product.image} alt={product.title} className="basket__image" />
      <div className="basket__content">
        <h2 className="basket__content-title">{product.title}</h2>
        <p className="basket__content-prise">£{product.price}</p>
        <div className="basket__quantity">
          <button
            onClick={() => {
              if (product.quantity > 1) {
                setBasket(
                  basket.map((item) => {
                    if (item.id === product.id) {
                      return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                  }),
                );
              }
            }}
            className="basket__button"
          >
            -
          </button>
          <span className="basket__value">{product.quantity}</span>
          <button
            onClick={() => {
              setBasket(
                basket.map((item) => {
                  if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                  }
                  return item;
                }),
              );
            }}
            className="basket__button"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
export default BasketItem;
