import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  SingleProduct,
  Product,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  SharedLayout,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/*" element={<Error />} />
            <Route
              path="checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
