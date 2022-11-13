import React from "react";
import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import validator from "validator";
// import "./css/globals.css";

const Checkout = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const [startValidationName, setStartValidationName] = useState(true);
  const [startValidationMail, setStartValidationMail] = useState(true);
  const [startValidationPhone, setStartValidationPhone] = useState(true);

  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-z ]*$") &&
      validator.isLength(n, {
        min: 5,
        max: 36,
      })
    );
  };

  const validatePhone = (p) => {
    return (
      validator.isNumeric(p) &&
      validator.isLength(p, {
        min: 10,
        max: 10,
      })
    );
  };

  const validateMail = (m) => {
    return validator.isEmail(m);
  };
  // console.log(validateName(name)); lo hago para saber si funcionan bien la validaciones. Si me dan true con las palabras está funcionando bien!

  return (
    <body className="body-bg">
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
                  onBlur={() => setStartValidationName(false)}
                />
                {!validateName(name) && !startValidationName && (
                  <Form.Text className="text-danger">
                    Escribe tu nombre completo.
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="mail"
                  placeholder="ingresa tu correo"
                  onInput={(e) => setMail(e.target.value)}
                  onBlur={() => setStartValidationMail(false)}
                />

                {!validateMail && !startValidationMail && (
                  <Form.Text className="text-danger">
                    Escribe tu email.
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Numero de telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ingresa tu numero"
                  onInput={(e) => setPhone(e.target.value)}
                  onBlur={() => setStartValidationPhone(false)}
                />
                {!validatePhone(phone) && !startValidationPhone && (
                  <Form.Text className="text-danger">
                    Escribe tu telefono, solo pueden ser numeros.
                  </Form.Text>
                )}
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
    </body>
  );
};

export default Checkout;
