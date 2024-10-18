import React from 'react';
import './LandingPage.css';
import { Button, Container,Row } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'>Task Manager App</h1>
                    <p className='subtitle'>Write your Thoughts</p>
                </div>
                <div className='buttonContainer'>
                <a href='/login'><Button size='lg' className='landingbutton'>Login</Button></a>
                <a href='/signup'><Button size='lg' className='landingbutton' variant='outline-primary'>Signup</Button></a>
            </div>
            </div>
            
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
