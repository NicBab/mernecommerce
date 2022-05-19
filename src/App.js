import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  Home,
  ProductList,
  Product,
  Register,
  Login,
  Cart,
} from "./pages/index";

function App() {
  const user = true

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
