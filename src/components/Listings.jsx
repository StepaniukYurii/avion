import "./Listings.css";
import vases from "../assets/images/vases.jpg";

function Listings() {
  const products = [
    { id: 1, title: "Rustic vase set", price: 155, image: vases },
    { id: 2, title: "The Lucy Lamp", price: 399, image: vases },
    { id: 3, title: "The Lucy Lamp", price: 399, image: vases },
    { id: 4, title: "The Lucy Lamp", price: 399, image: vases },
  ];
  return (
    <section className="listings">
      <div className="container">
        <ul className="listings__list">
          {products.map((product) => {
            return (
              <li key={product.id} className="listings__item">
                <img
                  src={product.image}
                  alt="Vase Set"
                  className="listings__image"
                />
                <h3 className="listings__title">{product.title}</h3>
                <p className="listings__price">£{product.price}</p>
              </li>
            );
          })}
        </ul>
        <button className="listings__button">View collection</button>
      </div>
    </section>
  );
}
export default Listings;
