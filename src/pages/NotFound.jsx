import React from 'react'
import { motion } from 'framer-motion'
import { Col, Container,Row } from 'react-bootstrap'
// import { Rainbow } from 'react-bootstrap-icons'
 import Notfound from "../assests/Notfound.png"
import Button from "../components/Button"
import { Link } from 'react-router-dom'
export default function NotFound() {


  return (

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <Container>
        <Row className='d-flex justify-content-end'>
        <Col lg={2} className="mt-4"> <Link to="/"><Button title="go to home page"/></Link></Col>
       </Row>
       <Row className=' justify-content-center'>
        <Col lg={6} className="mb-3"><img src={Notfound} alt="" height="400vh" /></Col>
       </Row>
       
      </Container>
    </motion.div>
  )
}
