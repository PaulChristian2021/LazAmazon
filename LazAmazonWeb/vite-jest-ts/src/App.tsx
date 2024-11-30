import { BrowserRouter, Routes, Route } from "react-router";
// import { useState } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import SearchPage from "./pages/SearchPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import StorePage from "./pages/StorePage";
import AccountPage from "./pages/AccountPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
