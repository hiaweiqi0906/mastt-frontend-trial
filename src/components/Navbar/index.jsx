import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Avatar from 'assets/Avatar.png'
import Notification from 'assets/Notification.png'

import './Navbar.css'

export default function MasttNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand href="/player/">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          MASTT
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/clubs">CLUBS</Nav.Link>
            <Nav.Link href="/ranking">RANKS</Nav.Link>
            <Nav.Link href="/all-matches">MATCHES</Nav.Link>
            <Nav.Link href="/about-us">ABOUT US</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item className='align-self-center'>
              <Nav.Link eventKey="notification"  href="/player/notifications">
                <img
                  alt=""
                  src={Notification}
                  width="28"
                  height="28"
                  className="d-inline-block align-top"
                /></Nav.Link>
            </Nav.Item>
            <Nav.Item className='align-self-center'>
              <Nav.Link href="/player/profile">
                <img
                  alt=""
                  src={Avatar}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
