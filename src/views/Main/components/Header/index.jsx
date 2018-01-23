import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => (
  <Navbar className="header">
    <Navbar.Header>
      <Navbar.Brand>
        LOGO HERE
      </Navbar.Brand>
    </Navbar.Header>
    <Nav className="header-links" pullRight>
      <li className="header-link-item">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
      </li>
      <li className="header-link-item">
        <NavLink to="/login" activeClassName="active">Login</NavLink>
      </li>
      <NavDropdown
        id="header-dropdown"
        title="Maintenance"
      >
        <li className="header-dropdown-item">
          <NavLink to="/maintenance/crud" activeClassName="active">Crud</NavLink>
        </li>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default Header;
