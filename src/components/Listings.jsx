import "./Listings.css";
import vaseSet from "../assets/images/vase-set.jpg";
import lusyLamp from "../assets/images/lusy-lamp.jpg";
import silkyVase from "../assets/images/silky-vase.jpg";
import dandyChair from "../assets/images/dandy-chair.jpg";

function Listings() {
  const products = [
    { id: 1, title: "Rustic vase set", price: 155, image: vaseSet },
    { id: 2, title: "The Lucy Lamp", price: 399, image: lusyLamp },
    { id: 3, title: "The Lucy Lamp", price: 399, image: silkyVase },
    { id: 4, title: "The Lucy Lamp", price: 399, image: dandyChair },
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
