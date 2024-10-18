import React from 'react';
import {Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand>
            <Link to="/">Task Manager</Link>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

            <Nav className='m-auto'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
            </Nav>
          <Nav>
            <Nav.Link href="/tasks">
                <Link to="/tasks">My Tasks</Link>
            </Nav.Link>
            
            <NavDropdown title="Channayya" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action4">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
