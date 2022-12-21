import React from 'react'
import { Row, Container } from 'react-bootstrap'
export default function FooterIconNav() {
    return (
        <>
        <div className='footer-second-main '>
            <Container >
                <Row className='footer-second-first-row'>
                    {/* logo <img src="" alt="" /> */}
                    <div  className='footer-second'>
                        <h1>IconScout <span style={{color:"grey",fontWeight:"300",fontSize:"1.2rem",left:"1rem"}}> Design Resource Marketplace</span></h1>
                        <p><em style={{ color: "#3579C7" }}>5,720,205</em><span style={{ color: "grey", fontWeight: "400" }}> graphic resources & counting</span></p>
                    </div>
                </Row>
                    <Row>
                        
                    </Row>
            </Container>
            </div>
        </>
    )
}
