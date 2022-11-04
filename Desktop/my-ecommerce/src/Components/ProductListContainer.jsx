import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // DEJAR SIEMPRE VACIO EL ARRAY DE LA LINEA 15, PARA NO ESTAR REPITIENDO TODO EL TIEMPO. EL USEEFFECT ME ASEGURA QUE LA INFO DE LA API LLEGUE AL FINAL, PRIMERO APARECEN LAS COSAS SINCRONAS Y DESPUES LAS ASINCRONAS COMO EL USEEFFECT.
  return <ProductList data={data} />;
};

export default ProductListContainer;
