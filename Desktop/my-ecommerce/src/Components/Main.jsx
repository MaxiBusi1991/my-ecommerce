import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Contador from "./Contador";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // DEJAR SIEMPRE VACIO EL ARRAY DE LA LINEA 15, PARA NO ESTAR RENDERIZANDO TODO EL TIEMPO

  return (
    <>
      <Header />
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <Hero />
        <Contador />
        <div>{data.title}</div>
        <div>{data.description}</div>
        <div>{data.price}</div>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
