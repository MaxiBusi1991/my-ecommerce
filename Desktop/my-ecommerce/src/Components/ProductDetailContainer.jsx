import React from "react";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // DEJAR SIEMPRE VACIO EL ARRAY DE LA LINEA 15, PARA NO ESTAR REPITIENDO TODO EL TIEMPO. EL USEEFFECT ME ASEGURA QUE LA INFO DE LA API LLEGUE AL FINAL, PRIMERO APARECEN LAS COSAS SINCRONAS Y DESPUES LAS ASINCRONAS COMO EL USEEFFECT.
  return (
    <>
      <ProductDetail data={data} />;
    </>
  );
};

export default ProductDetailContainer;
