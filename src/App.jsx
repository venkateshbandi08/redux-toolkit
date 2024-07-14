import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import Products from "./components/products/Products";
import Home from "./pages/homePage/Home";
import Cart from "./components/cartPage/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
