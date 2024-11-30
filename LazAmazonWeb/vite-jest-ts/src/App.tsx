import { BrowserRouter, Routes, Route } from "react-router";
import React, { Suspense } from "react";
import "./App.css";

// import LandingPage from "./pages/LandingPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import OrdersPage from "./pages/OrdersPage";
// import SearchPage from "./pages/SearchPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import StorePage from "./pages/StorePage";
// import AccountPage from "./pages/AccountPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import CartPage from "./pages/CartPage";

// Code Splitting with React.lazy()
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const OrdersPage = React.lazy(() => import("./pages/OrdersPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetailPage"));
const StorePage = React.lazy(() => import("./pages/StorePage"));
const AccountPage = React.lazy(() => import("./pages/AccountPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        {/* TODO Add a proper loading spinner for Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index path="" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product" element={<ProductDetailPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
