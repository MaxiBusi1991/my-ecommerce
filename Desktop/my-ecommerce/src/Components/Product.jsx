import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ d }) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Img variant="top" src={d.image} height={250} width={250} />
        <Card.Body>
          <Card.Title>{d.title}</Card.Title>
          <Card.Text>{d.description}</Card.Text>
        </Card.Body>
        <Card.Footer> {d.price} </Card.Footer>
        <Card.Footer> {d.price} </Card.Footer>
      </Card>
    </>
  );
};

export default Product;
