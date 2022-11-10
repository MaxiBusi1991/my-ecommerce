import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiPoloShirt } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Navbar bg="dark" variant="dark">
          <Container className="d-flex justify-content-between">
            <Navbar.Brand>
              <div className="me-2 d-inline-flex">
                <GiPoloShirt className="icon-size" />
              </div>
              Bazar Yapur
            </Navbar.Brand>
            <div>
              <Link to="/checkout">
                <Button className="me-2" variant="danger">
                  Cart (1)
                </Button>
              </Link>
              <Link to="login">
                <Button variant="warning">Login</Button>
              </Link>
            </div>
          </Container>
        </Navbar>
      </Link>
    </>
  );
};

export default Header;
