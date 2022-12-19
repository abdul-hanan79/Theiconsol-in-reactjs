import React from 'react'
import { Row, Container } from 'react-bootstrap'
export default function FooterIconNav() {
    return (
        <>
            <Container >
                <Row className='footer-icon-nav'>
                    {/* <img src="" alt="" /> */}
                    <h1>IconScout
                        <span style={{ color: "grey", fontWeight: "300", fontSize: "1rem" }}>
                            Design Resource Marketplace</span></h1>
                        <p><em style={{ color: "#3579C7" }}>5,720,205</em><span style={{ color: "grey", fontWeight: "600" }}> graphic resources & counting</span></p>
                </Row>
            </Container>
        </>
    )
}
