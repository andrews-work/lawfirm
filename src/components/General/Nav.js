import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../css/Nav.css';

function Navmenu() {
  return (
    <Navbar bg="black" expand="xl" sticky="top" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="white-hamburger-menu" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="navmenu">
          <Nav.Link as={Link} to="/" className="text">Home</Nav.Link>
          <Nav.Link as={Link} to="/family" className="text">Individuals + Families</Nav.Link>
          <Nav.Link as={Link} to="/business" className="text">Business + Skilled</Nav.Link>
          <Nav.Link as={Link} to="/refugee" className="text">Humanitarian + Refugee</Nav.Link>
          <Nav.Link as={Link} to="/court" className="text">Court + Appeals</Nav.Link>
          <Nav.Link as={Link} to="/team" className="text">Team</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;
