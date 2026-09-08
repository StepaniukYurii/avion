import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ShoppingBasket from "./pages/ShoppingBasket";
import AllProductsPage from "./pages/AllProductsPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/avion">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<ShoppingBasket />} />
        <Route path="/all-products" element={<AllProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
