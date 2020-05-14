import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>

    <Navbar expand="lg">
      <Navbar.Brand href="/">Ignite+</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
       
       
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
         <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/form">Form</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/items">Items</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/table">Show Table</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/search">Search</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)