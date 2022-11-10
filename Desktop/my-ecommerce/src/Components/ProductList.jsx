import React from "react";
import { Row } from "react-bootstrap";
import Product from "./Product";

const ProductList = (props) => {
  return (
    <div>
      <h2 className="text-center">Nuestros Productos</h2>
      <Row xs={1} md={3}>
        {props.data.map((d, i) => (
          <Product d={d} key={i} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
