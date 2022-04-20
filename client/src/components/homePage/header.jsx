import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Navbar.Brand href="/">Maid Booking</Navbar.Brand>

          <Nav>
            <Nav.Link>
              <Button variant="light">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Sign Up
                </Link>
              </Button>{' '}
            </Nav.Link>

            <Nav.Link>
              <Button variant="light">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Button>{' '}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NNavbar;
