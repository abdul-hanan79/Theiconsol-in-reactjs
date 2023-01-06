import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'

import { Link } from "react-router-dom"
import FooterIconNav from './FooterIconNav'
import FooterCopyright from './FooterCopyright'
// import ViewResourcesList from './ViewResourcesList';

export default function FooterSecond() {
    return (
        <>
            <div className='footer-second-main '>
                <div class="overflow-hidden" >

                    <Container fluid>
                        <FooterIconNav />
                        <Row>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <ul className='view-resources-ul'>
                                    <li className='my-3 li-heading fw-bold text fs-7'>Graphic Resources</li>
                                    <li className='my-3 '><Link to="/footer/params">Free icon</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Free Logo Icons</Link></li>
                                    <li className='my-3'><Link to="/footer/params">IOS Icons</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Sticker Icons</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Gradient Icons</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Apps & Plugins </Link></li>
                                    <li className='my-3'><Link to="/footer/params">Use Cases</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Free Icon OF The Day</Link></li>
                                </ul>
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <ul className='view-resources-ul'>
                                    <li className='my-3 fw-bold li-heading text fs-7'>Product</li>
                                    <li className='my-3'><Link to="/footer/params">Unicons Icons Font </Link></li>
                                    <li className='my-3 '><Link to="/footer/params">Color Editor</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Free Logo Icons</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Sticker Icons</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Hire Designers</Link></li>
                                </ul>
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <ul className='view-resources-ul'>
                                    <li className='my-3 fw-bold li-heading text fs-7'>Company</li>
                                    <li className='my-3'><Link to="/footer/params"> Blog</Link></li>
                                    <li className='my-3 '><Link to="/footer/params">Tutorials</Link></li>
                                    <li className='my-3'><Link to="/footer/params"> About</Link></li>
                                    <li className='my-3'><Link to="/footer/params">IOS Icons</Link></li>
                                    <li className='my-3'><Link to="/footer/params">All Featurest</Link></li>
                                    <li className='my-3'><Link to="/footer/params">sell On Theiconsol</Link></li>
                                    <li className='my-3'><Link to="/footer/params">Startup Program</Link></li>
                                    <li className='my-3'><Link to="/footer/params">We,are Hearing</Link></li>
                                </ul>
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <ul className='view-resources-ul'>
                                    <li className='my-3 fw-bold li-heading text fs-7'>Legal</li>
                                    <li className='my-3'><Link to="/Terms of Use"> Terms Of Use</Link></li>
                                    <li className='my-3 '><Link to="/Privacy Policy">Privacy Policy</Link></li>
                                    <li className='my-3 '><Link to="/Privacy Policy">Lisence Agreement</Link></li>
                                    <li className='my-3'><Link to="/Contributor Terms">Contributor Terms</Link></li>
                                    <li className='my-3'><Link to="/Support Center">Support Center</Link></li>
                                    <li className='my-3'><Link to="/Join Discord">Join Discord</Link></li>
                                </ul>
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={4}>
                                <ul className='view-resources-ul'>
                                    <li className='my-3 fw-bold text li-heading fs-7'>Get Theiconsole For desktop</li>

                                    <a className='btn-link' href='/apple'><button type="button" className="btn btn-light  btn-artist">
                                        <i class="fa-brands fa-lg fa-apple"></i></button></a>
                                    <a className='btn-link' href='/window'><button type="button" className="btn btn-light ms-1 btn-artist">
                                        <i class="fa-brands fa-lg fa-windows"></i></button></a>
                                </ul>  <ul className='view-resources-ul'>
                                    <li className='my-3 fw-bold text li-heading fs-7'>Follow Us</li>

                                    <a className='btn-link' href='https://www.facebook.com/thetechnixus' target="_blank"><button type="button" className="btn btn-light  btn-artist">
                                        <i class="fa-brands fa-lg fa-facebook"></i></button></a>
                                    <a className='btn-link' href='https://www.instagram.com/technixus/' target="_blank"><button type="button" className="btn btn-light ms-1 btn-artist">
                                        <i class="fa-brands fa-lg fa-instagram"></i></button></a>
                                    <a className='btn-link' href='https://twitter.com/nomanali7788459' target="_blank"><button type="button" className="btn btn-light ms-1 btn-artist">
                                        <i class="fa-brands fa-lg fa-twitter"></i></button>
                                    </a>
                                    <a className='btn-link' href='https://technixus.com/' target="_blank"><button type="button" className="btn btn-light ms-1 btn-artist" >
                                        <i class="fa-solid fa-globe"></i></button></a>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <FooterCopyright />
        </>
    )
}
