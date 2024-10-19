import React, { useState } from 'react';
import MainScreen from '../../Components/MainScreen';
import "./LoginPage.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Loading from '../../Components/Loading';
import ErrorMessage from '../../Components/ErrorMessage';

const LoginPage = ({history}) => {
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[error, setError]=useState(false);
    const[loading, setLoading]=useState(false);

    

    const submitHandler=async(e)=>{
        e.preventDefault();

        try{
            const config={
                headers:{
                    "Content-type":"application/json"
                }
            }
            setLoading(true);

            const {data}=await axios.post('/api/users/login',{
                email,password
            },config)

            console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false)
            setError(false)
        }catch(error){
            setError(error.response.data.message);
            setLoading(false)
        }
    }

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
      {
            error && <ErrorMessage variant='danger'>{error}</ErrorMessage>
        }
        {
            loading && <Loading/>
        }
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row className='py-3'>
        <Col>
        New User ? <Link to="/signup">Register Here</Link>
        </Col>
    </Row>
      </div>
    </MainScreen>
  );
}

export default LoginPage;
