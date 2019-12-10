import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import './fontStyle.css';


const Styles = styled.div`
  // a, .navbar-brand, .navbar-nav .nav-link {
  //   color: #bbb;
  //   font-weight: 400px !important;
  //   &:hover {
  //     color: #696969;
  //     text-decoration: none;
      
  //   }
  // }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar fixed="top" expand="lg" bg="light">
      <Navbar.Brand><Nav-Link><Link to="/">Portfolio</Link></Nav-Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/Contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)