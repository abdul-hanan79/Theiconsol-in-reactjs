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
                    <Row className='footer-second-first-row'>
                        {/* logo <img src="" alt="" /> */}
                        <div className='footer-second'>
                            <h1>Theiconsol <span style={{ color: "grey", fontWeight: "300", fontSize: "1.2rem", left: "1rem" }}> Design Resource Marketplace</span></h1>
                            <p><em style={{ color: "#3579C7" }}>5,720,205</em><span style={{ color: "grey", fontWeight: "400" }}> graphic resources & counting</span></p>
                        </div>
                    </Row>
                    <Row>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList
                            lih="Graphic Resources"
                            lia="Free icon"
                            lib="Free Logo Icons"
                            lic="iOS Icons"
                            lid="Sticker Icons"
                            lie="Gradient Icons" 
                            lif="Calendar of festivities"  
                            lig="Free Assets of The Day" /></Col>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList
                            lih="Product"
                            lia="Unicons Icons Font "
                            lib="Color editor"
                            lic="Apps & Plugins "
                            lid="Hire Designers"
                            lie="IconScout API" /></Col>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList
                            lih="Company"
                            lia="  Blog"
                            lib="Tutorials"
                            lic=" About"
                            lid="All Featurest"
                            lie="Sell on IconScout"
                            lif="Startup Program"
                            lig="We,are hearing" /></Col>
                        <Col md={4} xs={6} sm={6} lg={2}><FooterSecondList
                            lih="Legal"
                            lia="Terms of Use"
                            lib=" Privacy Policy"
                            lic="License Agreement"
                            lid=" Contributor Terms"
                            lie=" Support Center" 
                            lif="  Join Discord" /></Col>
                        <Col md={4} xs={6} sm={6} lg={4}><FooterSecondList
                            lih="Get Theiconsole For d  esktop"
                            lia="Merry Christmas"/></Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
