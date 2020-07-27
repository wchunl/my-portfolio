import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function NavigationBar() {
  return (
    <Navbar bg='dark' variant='dark' className='px-5' expand='md'>
      <Navbar.Brand href="#home">Wai Chun Leung</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ml-auto'>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}