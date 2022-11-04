import React from "react";
import { Row } from "react-bootstrap";
import Product from "./Product";

const ProductList = (props) => {
  return (
    <div>
      <Row xs={1} md={3}>
        {props.data.map((d, i) => (
          <Product d={d} key={i} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
