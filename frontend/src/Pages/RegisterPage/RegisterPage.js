
import React, { useState } from 'react';
import MainScreen from '../../Components/MainScreen';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Loading from '../../Components/Loading';
import ErrorMessage from '../../Components/ErrorMessage';
import Loading from '../../Components/Loading';

const RegisterPage = () => {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const[pic, setPic]=useState("https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png");
    const[message, setMessage]=useState(null);
    const[picMessage, setPicMessage]=useState(null);
    const[error, setError]=useState(false);
    const[loading, setLoading]=useState(false);

    const submitHandler=async(e)=>{
        e.preventDefault();

        if(password !==confirmPassword){
            setMessage("Passwords Do not Match!")
        }else{
            setMessage(null);
            try{
                const config={
                    headers:{
                        "Content-type":"application/json"
                    }
                }
                setLoading(true);
                const {data}=await axios.post('/api/users',{
                    name,email,password,pic
                },config)
                setLoading(false)
                localStorage.setItem('userInfo',JSON.stringify(data));
            }catch(error){
                setError(error.response.data.message);
            setLoading(false)
            }
        }
    }
  return (
    <MainScreen title="Register">
      <div className="loginContainer">
      {
            error && <ErrorMessage variant='danger'>{error}</ErrorMessage>
        }
        {
            message && <ErrorMessage variant='danger'>{message}</ErrorMessage>
        }
        {
            loading && <Loading/>
        }
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
      </Form.Group>

      

<Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <Row className='py-3'>
        <Col>
        Already Have ? <Link to="/login">Account</Link>
        </Col>
    </Row>
      </div>
    </MainScreen>
  );
}

export default RegisterPage;
