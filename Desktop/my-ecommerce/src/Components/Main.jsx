import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Product from "./Product";
import ProductListContainer from "./ProductListContainer";

const Main = () => {
  return (
    <>
      <Header />
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Hero />
        <div className="mt-5 text-center">
          <h2>Nuestros Productos</h2>
        </div>
        <ProductListContainer />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
