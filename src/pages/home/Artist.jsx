import React from 'react'
import Button from "../../components/Button"
import { Container, Row, Col } from 'react-bootstrap'
import img from "../../assests/artistt.webp"

export default function Artist() {
    return (
        <>
            <Container>
                <div className='py-5'>
                    <h1 className='add-magic-heading text-center'>Content from tens of thousands<br /> of artists worldwide</h1>
                    <div className='d-flex justify-content-center py-3'>
                        <Button title="Become a contributor" />
                        <button type="button" class="btn btn-light ms-3">Meet all Artist</button>
                    </div>
                </div>
                <Container className='artist-main py-5 px-5 mb-5'>
                    <Row className='d-flex'>
                        <Col>
                            <h2 className='fw-bold fs-1 mb-4 text-light'>Access Assets, Integrations, and Motion from the largest Design Ecosystem in the world.</h2>
                            <Button title="Get Started - It`s Free " />
                        </Col>
                        <Col className=' artist-img text-center'>
                            <img src={img} width="300" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
