import React from 'react'
import { motion } from "framer-motion"
import { Container, Row, Col } from "react-bootstrap"
import signupimage from "../assests/auth-img.png"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import "./Pages.css"

export default function Signup() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='signup '>
        <Container>
          <Row className='pb-3'>
            <Col><h1 className='text-light text-center text-decoration-none pt-2'>Create an  Account</h1>
              <p className='text-center  text-light text-decoration-none'>
                <Link to="/" className='  text-light text-decoration-none'>Home</Link> /
                <Link to="/sign up" className='  text-light text-decoration-none'>Registration</Link></p></Col>
          </Row>
        </Container>
        <Container >
          <Row className='sign1'>
            <Col lg={6} md={12} sm={12} xs={12} className="d-flex justify-content-center align-items-center">
              <div >
                <h2 className='text-light'>Create An Account</h2>
                <input className="form-control mt-3 mb-4 " type="text" placeholder="Full Name" />
                <input className="form-control mb-4 " type="email" placeholder="Email" />
                <input className="form-control mb-4 " type="password" placeholder="Password" />
                <input className="form-control mb-4 " type="password" placeholder=" Confirm Password" />
                <p className='text-light'>
                  <input class="form-check-input  me-2" type="checkbox" /> 
                  <span className="sign-text "> I Agree With All </span> Terms & Condition
                </p>
                <Button title="CREATE AN ACCOUNT " />
                <p className=' pt-2 '>
                  Already You Have An Account In Here?
                   <span className="sign-hover-text  "> 
                   <Link to="/login" className='  text-light text-decoration-none'> Sign In</Link>
                  </span> 
                   </p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className=" signupimage d-flex justify-content-center align-items-center">
              <img src={signupimage} alt=""className='signupimage' />
            </Col>
          </Row>
        </Container>
      </div>
    </motion.div>
  )
}
