import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link
            className={
              location.pathname === "/" ? "btn btn-success" : "btn btn-secondary"
            }
            to="/"
          >
            Home
          </Link>
          <Nav className="me-auto">
            <Link
              className={
                location.pathname === "/login"
                  ? "btn btn-success"
                  : "btn btn-secondary"
              }
              to="/login"
            >
              Login
            </Link>
            <Link
              className={
                location.pathname === "/create"
                  ? "btn btn-success"
                  : "btn btn-secondary"
              }
              to="/create"
            >
              Create Post
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
