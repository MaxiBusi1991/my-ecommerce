import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import ProductListContainer from "./ProductListContainer";
import ProductDetailContainer from "./ProductDetailContainer";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

const Main = () => {
  return (
    <>
      <Header />
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <div className="mt-5 text-center">
          {/* <h2>Nuestros Productos</h2> */}
        </div>
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/product/:id" element={<ProductDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
