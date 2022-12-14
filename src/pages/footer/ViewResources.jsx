import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ViewResourcesList from './ViewResourcesList';
import { useState } from 'react';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
export default function ViewResources() {
  const [key, setKey] = useState('home');
  return (
    <>
      <h1 className='add-magic-heading  text-center mb-5'>View resources with keywords</h1>
      <Container className='resources-container'>
        {/* <div className='view-resources-tittle'> */}
        {/* <ul className='view-resources-tittle-ul d-flex py-1 flex-wrap'>
            <li className='view-resources-tittle-li px-3 py-2'>3D Illustrate</li>
            <li className='view-resources-tittle-li-active  px-4 py-1'> Lottie Animation </li>
            <li className='view-resources-tittle-li px-4 py-2'>Icon</li>
            <li className='view-resources-tittle-li px-3 py-2'>Illustrate</li>
          </ul> */}
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home"  title="Home">{/*className='nav-link' because this is by default className */}
            {/* IS INSPECT AND TAKE THE CLASSNAME='NAV-LINK' */}
            <Row className='mt-4 mb-5'>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Merry Christmas" lib="Arrow" lic="ReoupLoad" lid="Orange Bat" lie="Emessage" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Loader" lib="Waiting" lic="Comb" lid="Data Set" lie="Paymnet" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Online Shopping" lib="Progress" lic="Ai" lid="Business Loan" lie="Shoopping" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Christmas Gifts" lib="Female" lic="Green Card" lid="Business Firm" lie="Stip" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Smartphone" lib="Gal" lic="Market" lid=" Cold Cash" lie=" Red Sun" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Payment" lib="ThanksGiving" lic="Girl" lid=" Commnication" lie="View More" /></Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Profile">{/*className='nav-link' because this is by default className */}
            {/* IS INSPECT AND TAKE THE CLASSNAME='NAV-LINK' */}

            <Row className=''>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Merry Christmas" lib="Arrow" lic="ReoupLoad" lid="Orange Bat" lie="Emessage" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Loader" lib="Waiting" lic="Comb" lid="Data Set" lie="Paymnet" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Online Shopping" lib="Progress" lic="Ai" lid="Business Loan" lie="Shoopping" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Christmas Gifts" lib="Female" lic="Green Card" lid="Business Firm" lie="Stip" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Smartphone" lib="Gal" lic="Market" lid=" Cold Cash" lie=" Red Sun" /></Col>
              <Col md={4} xs={6} sm={6} lg={2}><ViewResourcesList
                lia="Payment" lib="ThanksGiving" lic="Girl" lid=" Commnication" lie="View More" /></Col>
            </Row>
          </Tab>

        </Tabs>
        {/* </div>  */}
        {/* <div className="dropdown">
          <button className=" dropdown-toggle p-2 btn btn-outline-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='dropdown-text mr-5'> All Contents</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div> */}

      </Container>
    </>
  )
}
