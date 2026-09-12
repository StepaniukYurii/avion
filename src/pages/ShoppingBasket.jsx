import Header from "../components/Header";
import Footer from "../components/Footer";
import Basket from "../components/Basket";

function ShoppingBasket({ basket, setBasket }) {
  return (
    <>
      <Header />
      <Basket basket={basket} setBasket={setBasket} />
      <Footer />
    </>
  );
}
export default ShoppingBasket;
