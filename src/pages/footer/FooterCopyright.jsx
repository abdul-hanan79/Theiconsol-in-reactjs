import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { Link } from 'react-bootstrap-icons'
function FooterCopyright() {
    return (
        <div className="footer-copyright">
            <Container >
                <Row className="justify-content-center align-items-center">
                    <Col lg={5} md={6} sm={6}>
                        <p className="text-center text-light pt-3">Copyright ©2023 Powered by <span className='copyright-span'> TechNixus </span> </p>
                </Col>
            </Row>
        </Container>
        </div >
    )
}

export default FooterCopyright
