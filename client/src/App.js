import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";

import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";

import Contact from "./Contact";
import CommentSection from "./CommentSection";
// import React, { useState } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* <ReviewForm onAddReview={handleAddReview} /> */}
          {/* <ReviewList reviews={reviews} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/comment" element={<CommentSection />} /> */}

          <Route path="/contact" element={<Contact />} />
          {/* <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} /> */}
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
