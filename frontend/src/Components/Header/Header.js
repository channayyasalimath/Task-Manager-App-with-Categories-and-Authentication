import axios from 'axios';
import React from 'react';
import {Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate= useNavigate()
  const handleLogout = () => {
    axios.post('/api/users/logout')
      .then(res => {
        
        localStorage.removeItem('userInfo');
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };
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
              <NavDropdown.Item onClick={handleLogout}>
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
