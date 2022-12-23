import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom';
import FooterSecondList from './FooterSecondList';
// import ViewResourcesList from './ViewResourcesList';

export default function FooterIconNav(props) {
    const type =useParams();
    const pramsvalue =useLocation.state.pathname
    console.log("prams " + type)
    console.log("prams value" + pramsvalue)
    return (
        <>
            <div className='footer-second-main '>
                <Container >
                    <Row className='footer-second-first-row'>
                        {/* logo <img src="" alt="" /> */}
                        <div className='footer-second'>
                            <h1>IconScout <span style={{ color: "grey", fontWeight: "300", fontSize: "1.2rem", left: "1rem" }}> Design Resource Marketplace</span></h1>
                            <p><em style={{ color: "#3579C7" }}>5,720,205</em><span style={{ color: "grey", fontWeight: "400" }}> graphic resources & counting</span></p>
                        </div>
                    </Row>
                    <Row>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList
                            address="lia"
                            lih="Graphic Resources"
                            lia="Free icon" lib="Arrow" lic="ReoupLoad" lid="Orange Bat" lie="Emessage" /></Col>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList lih="Product"
                            address="lia"
                            lia="Free Emoji icon" lib="Arrow" lic="ReoupLoad" lid="Orange Bat" lie="Emessage" /></Col>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList lih="Company"
                            address="lia"
                            lia="Free logo icon" lib="Arrow" lic="ReoupLoad" lid="Orange Bat" lie="Emessage" /></Col>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList lih="Legal"
                            address="lia"
                            lia="Merry Christmas" lib="Arrow" lic="ReoupLoad" lid="Orange Bat" lie="Emessage" /></Col>
                        <Col md={4} xs={6} sm={6} lg={4}><FooterSecondList lih="Get Theiconsole For d  esktop"
                            address="lia"
                            lia="Merry Christmas" lib="Arrow" lic="ReoupLoad" lid="Orange Bat" lie="Emessage" /></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
