import React from "react";
import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import validator from "validator";

const Checkout = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const validateName = (n) => {
    return validator.matches(n, `^[a-zA-z ]*$^`);
  };

  return (
    <Container className="mt-3">
      <Card>
        <Card.Header>Mi Carrito</Card.Header>
        <Card.Body>
          <h2>Detalle del Carrito</h2>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Header>Datos del comprador</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingresa tu nombre completo"
                onInput={(e) => setName(e.target.value)}
              />
              {!validateName(name) && (
                <Form.Text className="text-danger">
                  Escribe tu nombre completo.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="mail"
                placeholder="ingresa tu correo"
                onInput={(e) => setMail(e.target.value)}
              />

              <Form.Text className="text-danger">Escribe tu email.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Numero de telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingresa tu numero"
                onInput={(e) => setPhone(e.target.value)}
              />
              <Form.Text className="text-danger">
                Escribe tu telefono.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Acepto terminos y condiciones"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Checkout;
