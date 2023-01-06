import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Container,Row,Col} from "react-bootstrap"
export default function FooterIconNav() {
  // console.log(props.address)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
       <Container fluid>
       <Row className='footer-second-first-row  align-items-center'>
                            {/* logo <img src="" alt="" /> */}

                            <Col lg={3} md={6} sm={12}><Link to="/" className='text-dark fw-bold text-decoration-none'><h1>Theiconsol</h1></Link></Col>
                            <Col lg={3} md={6} sm={12} >
                                <p style={{ color: "grey", fontWeight: "300", fontSize: "1.2rem" }}> Design Resource Marketplace</p>
                            </Col>
                            <Col lg={6} md={6} sm={12} > <p className='  text-end' ><em style={{ color: "#3579C7" }}>Resources for graphics:</em><span style={{ color: "grey", fontWeight: "400" }}>  5,768,851 and counting</span></p>
                            </Col>

                        </Row>
       </Container>
    </motion.div>
  )
}
