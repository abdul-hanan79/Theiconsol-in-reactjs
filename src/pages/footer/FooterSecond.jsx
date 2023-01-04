import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom';
import FooterSecondList from './FooterSecondList';
// import ViewResourcesList from './ViewResourcesList';

export default function FooterIconNav() {
    return (
        <>
            <div className='footer-second-main '>
                <div class="overflow-hidden" >
                    <Row className='footer-second-first-row '>
                        {/* logo <img src="" alt="" /> */}
                        <div className='footer-second'>
                            <Col lg={3} md={3} sm={12} ><h1>Theiconsol</h1></Col>
                            <Col lg={3} md={3} sm={12}  >
                                <p style={{ color: "grey", fontWeight: "300", fontSize: "1.2rem", left: "1rem", textAlign: "left" }}> Design Resource Marketplace</p> </Col>
                            <Col lg={3} md={3} sm={12} > <p><em style={{ color: "#3579C7" }}>Resources for graphics:</em><span style={{ color: "grey", fontWeight: "400" }}>  5,768,851 and counting</span></p> </Col>
                        </div>
                    </Row>
                    <Container>
                        <Row>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <FooterSecondList
                                    lih="Graphic Resources"
                                    lia="Free icon"
                                    lib="Free Logo Icons"
                                    lic="iOS Icons"
                                    lid="Sticker Icons"
                                    lie="Gradient Icons"
                                    lif="Calendar of festivities"
                                    lig="Free Assets of The Day" />
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <FooterSecondList
                                    lih="Product"
                                    lia="Unicons Icons Font "
                                    lib="Color editor"
                                    lic="Apps & Plugins "
                                    lid="Hire Designers"
                                    lie="Theiconsol API" />
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <FooterSecondList
                                    lih="Company"
                                    lia="  Blog"
                                    lib="Tutorials"
                                    lic=" About"
                                    lid="All Featurest"
                                    lie="Sell on Theiconsol"
                                    lif="Startup Program"
                                    lig="We,are hearing" />
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={2}>
                                <FooterSecondList
                                    lih="Legal"
                                    lia="Terms of Use"
                                    lib=" Privacy Policy"
                                    lic="License Agreement"
                                    lid=" Contributor Terms"
                                    lie=" Support Center"
                                    lif="  Join Discord" />
                            </Col>
                            <Col md={4} xs={6} sm={6} lg={4}>
                                <FooterSecondList
                                    lih="Get Theiconsole For desktop"
                                    lia="Merry Christmas" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
