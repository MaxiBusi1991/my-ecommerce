import React from "react";
import { useState } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import Contador from "./Contador";

const ProductDetail = ({ data }) => {
  const [contador, setContador] = useState(1);
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Card.Img variant="top" src={data.image} />
        </Col>
        <Col>
          <Container>
            <Card.Body className="mt-5">
              <Card.Title className="mb-1" as="h2">
                {data.title}
              </Card.Title>
              <Card.Text className="mb-1">{data.description}</Card.Text>
            </Card.Body>
            <Card.Text className="mb-1" as="h3">
              ${data.price}
            </Card.Text>
            <Button variant="success">Comprar</Button>
            <Contador contador={contador} setter={setContador} />
          </Container>
        </Col>
      </Row>

      <Card className="border-0"></Card>
    </Container>
  );
};

export default ProductDetail;
