import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import Listings from "../components/Listings";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Product() {
  return (
    <>
      <Banner />
      <Header />
      <ProductDetails />
      <Listings title="u might also like" />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
}
export default Product;
