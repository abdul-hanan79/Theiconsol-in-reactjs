import React from 'react'
import Button from "../../components/Button"
import { Container, Row, Col } from 'react-bootstrap'
import img from "../../assests/artistt.webp"
import { Link } from 'react-router-dom';
export default function Artist() {
    return (
        <>
            <Container>
                <div className='py-5 artist-container'>
                    <h1 className='add-magic-heading text-center'>Content from tens of thousands<br /> of artists worldwide</h1>
                    <div className='d-flex justify-content-center py-3'>
                        <Link className='btn-link' to='/contributor'><Button title="Become a contributor" /></Link>
                        <Link className='btn-link' to='/meetArtist'><button type="button" className="btn btn-light ms-3 btn-artist">Meet all Artist</button></Link>
                    </div>
                </div>
                <Container className='artist-main py-5 px-5 mb-5'>
                    <Row className='d-flex'>
                        <Col>
                            <h2 className='fw-bold fs-1 mb-4 text-light'>Access Assets, Integrations, and Motion from the largest Design Ecosystem in the world.</h2>
                            <Link className='btn-link' to='/getStarted'><Button title="Get Started - It`s Free " /></Link>
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
