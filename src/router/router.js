import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Header } from "../pages/header/header";

import Home from "../pages/products/home";
import Liked from "../pages/liked/liked";
import Cart from "../pages/cart/cart"

export default function MyRouter() {
  return (
  <Router>
    <Header />
        <Routes>
          <Route path="/favorites" element={< Liked />} />
          <Route path="/cart" element={< Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </Router>

  );
}
