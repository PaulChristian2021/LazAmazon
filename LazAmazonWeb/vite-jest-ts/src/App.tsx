import { BrowserRouter, Routes, Route } from "react-router";
// import { useState } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
