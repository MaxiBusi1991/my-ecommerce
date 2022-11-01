import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import validator from "validator";

const Formulario = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  console.log(name);
  //para usar validator primero lo instalamos con npm i validator. Despues tenemos que importarlo como import validator from 'validator';

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header>
          <h3>Mi Carrito</h3>
        </Card.Header>
        <Card.Body>
          <p>Detalle del carrito</p>
        </Card.Body>
      </Card>
      <Card className="mt-5">
        <Card.Header>
          <h3>Datos del comprador</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre completo"
                onInput={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-danger">
                Porfavor ingresa tu nombre
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Direccion de e-mail</Form.Label>
              <Form.Control
                type="mail"
                placeholder="Ingresa tu e-mail"
                onInput={(e) => setMail(e.target.value)}
              />
              <Form.Text className="text-danger">
                Porfavor ingresa un mail existente
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Numero de telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu numero telefonico"
                onInput={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Text className="text-danger">
                Porfavor ingresa un numero de telefono
              </Form.Text>
              <Form.Check
                className="mt-2"
                type="checkbox"
                label="Acepto terminos y condiciones"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Ir a pagar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Formulario;
