import React from 'react'
import { motion } from "framer-motion"
import { Container, Row, Col } from "react-bootstrap"
import signupimage from "../../assests/auth-img.png"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import "./Authentication.css"
export default function Login() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='signup-page '>
        <Container>
          <Row className='pb-3'>
            <Col><h1 className='text-light text-center text-decoration-none pt-2'>Sign In Account</h1>
              <p className='text-center  text-light text-decoration-none'>
                <Link to="/" className='  text-light text-decoration-none'>Home</Link> /
                <Link to="/sign up" className='  text-light text-decoration-none'> Sign in</Link></p></Col>
          </Row>
        </Container>
        <Container >
          <Row className='sign1'>
            <Col lg={6} md={12} sm={12} xs={12} className="d-flex justify-content-center align-items-center">
              <div >
                <h2 className='text-light pt-2'>Sign In Account</h2>
                <input className="form-control mb-4 " type="email" placeholder="Email" />
                <input className="form-control mb-4 " type="password" placeholder="Password" />
                <p className='d-flex justify-content-between login-text'>
                   <span >
                  <input className=" form-check-input   me-2 " type="checkbox" />
                  Remember Me </span>
                  <span>  <input class="form-check-input  me-2" type="checkbox" />Forget Password</span>
                
                </p>
                <Button title="SIGN IN ACCOUNT " />
                <p className='login-text pt-3'>Don't Have On Account Yet? 
                <span class="text-light sign-hover-text">
                  <Link to="/signup" className='  text-light text-decoration-none'> Create Account</Link> 
               </span> </p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className=" signupimage d-flex justify-content-center align-items-center">
              <img src={signupimage} alt="" className='signupimage' />
            </Col>
          </Row>
        </Container>
      </div>
    </motion.div>
  )
}
