import React from "react";
import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contador from "./Contador";

const Product = ({ d }) => {
  const [contador, setContador] = useState(1);
  return (
    <>
      <Container>
        <Card className="p-0">
          <Card.Img
            variant="top"
            className="p-3"
            src={d.image}
            height={250}
            width={250}
          />
          <Card.Body>
            <Card.Title>{d.title}</Card.Title>
            <Card.Text>{d.description}</Card.Text>
          </Card.Body>
          <Card.Footer> {d.price} </Card.Footer>
          <Card.Footer>
            <Link to={`/product/${d.id}`}>
              <Button>Ir al producto</Button>
            </Link>
          </Card.Footer>
          <Contador contador={contador} setter={setContador} />
        </Card>
      </Container>
    </>
  );
};

export default Product;
