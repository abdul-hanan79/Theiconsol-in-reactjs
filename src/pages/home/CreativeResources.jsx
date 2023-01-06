import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowButton from '../../components/ArrowButton'
import CardCreative from '../../components/CardCreative'
import cardCreativeImg from '../../assests/cardCreativeImg.png'
import { Link } from 'react-router-dom';
function CreativeResources() {
  return (
    <div className='creative-resources mt-5'>
      <Container >
        {/* ROW 1 */}
        <Row>
          <div className="creative-resources-section text-center ">
            <h1 className='creative-resources-heading '>Explore billions of creative resources</h1>
            <p className='creative-resources-text px-3'>Discover our featured assets and get to know the incredibly brilliant people who created them.</p>
            <Link className='btn-link' to='/freeAssests' > <ArrowButton btntitle='look up featured assets' className='creative-resources-button' size='sm' /></Link>
          </div>
        </Row>
        {/* ROW 2 */}
        <Row className='mb-3 mt-5 '  >
          <Col lg={3} md={3} sm={6}  className="mb-1">
            <CardCreative  link="/illustration" title="Pack of Merry Christmas illustrations" text="10 illustrations" image={cardCreativeImg} />
          </Col >

          <Col lg={3} md={3} sm={6} className="mb-1">
            <CardCreative link="/illustration" title="New Year's Eve Illustration Collection" text="17 illustartions" image={cardCreativeImg} />

          </Col>
          <Col lg={3} md={3} sm={6} className="mb-1">
            <CardCreative link="/illustration" title="Avatar 3D Style Icon Pack" text="53 3D Icons " image={cardCreativeImg} />

          </Col>
          <Col lg={3} md={3} sm={6} className="mb-1">
            <CardCreative link="/illustration" title="Christmas 3D icon pack" text="53 3D Icons" image={cardCreativeImg} />


          </Col>
          {/* ROW 2 */}

        </Row>
        <Row className='mb-3'>
          <Col lg={3} md={3} sm={6} className="mb-1" >
            <CardCreative link="/illustration" title="Party and Celebration Animated Icon Pack" text=" 20 Animated Icons" image={cardCreativeImg} />

          </Col>

          <Col lg={3} md={3} sm={6} className="mb-1">

            <CardCreative title="Icon Pack for a Happy New Year" text="53 3D Icons" image={cardCreativeImg} link="/illustration" />

          </Col>
          <Col lg={3} md={3} sm={6} className="mb-1">
            <CardCreative title="Icon Pack for a Happy New Year" text="53 3D Icons" image={cardCreativeImg} link="/illustration" />

          </Col>
          <Col lg={3} md={3} sm={6} className="mb-1">
            <CardCreative title="Icon Pack for a Happy New Year" text="53 3D Icons" image={cardCreativeImg} link="/illustration" />

          </Col>
        </Row>
        {/* ROW 3 */}

        {/* <Row className='mb-5'>
          <Col lg={3} md={3} sm={6}>
            <CardCreative title="Icon Pack for Christmas" text="53 3D Icons" image={cardCreativeImg} link="/illustration" />

          </Col>
          <Col lg={3} md={3} sm={6}>
            <CardCreative title="Icons for the stock market" text="53 3D Icons" image={cardCreativeImg} link="/illustration" />

          </Col>
          <Col lg={3} md={3} sm={6}>
            <CardCreative title="Christmas Icon Pack" text="53 3D Icons" image={cardCreativeImg} link="/illustration" />

          </Col>
          <Col lg={3} md={3} sm={6}>
            <CardCreative title="Animated Christmas Illustration Pack" text="53 3D Icons" image={cardCreativeImg} link="/illustration" />

          </Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default CreativeResources

