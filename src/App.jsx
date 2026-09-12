import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ShoppingBasket from "./pages/ShoppingBasket";
import AllProductsPage from "./pages/AllProductsPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <BrowserRouter basename="/avion">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<Product basket={basket} setBasket={setBasket} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/basket"
          element={<ShoppingBasket basket={basket} setBasket={setBasket} />}
        />
        <Route path="/all-products" element={<AllProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
