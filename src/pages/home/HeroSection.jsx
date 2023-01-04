
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CardMain from '../../components/CardMain'
import HomeInputGroup from "../../components/HeroInputGroup"
import { Link } from 'react-router-dom';
import CommingSoon from '../../components/CommingSoon';
function HeroSection() {
  return (
    <>

      <section className='hero'>
        <Container fluid  >
        <Row>
            {/* hero section main text div  */}
            <div className='hero-section-main '>
              <h1>17.5 million or more creative assets</h1>
              <p className='hero-section-main-p1'>SVGs, vector icons, illustrations, 3D graphics, and Lottie animations.</p>
              <p className='hero-section-main-p2'>that have been carefully selected
                Every day, or more 7000 new assets are added.<br /> Integrated tools, editors, plugins, and much more.</p>
            </div>
          
          {/* hero section main div  end */}
          {/* form input field */}
          
            <div>
              <form className='hero-section-form '>
                <HomeInputGroup />
              </form>
            </div>
          </Row>
        </Container>

      </section>
      <section className='card-section  '>
        <Container >
          <Row >
            <Col md={6} sm={6} lg={3} xs={12} className="mb-4">

              <Link to='/3dIllustration' className='card-link'>
                <CardMain title='3D Illustrations'
                  text='118,300 + 3d Contents in 3D with input file' bgColor='#DAFEEA ' />
              </Link></Col>
            <Col md={6} sm={6} lg={3} xs={12} className="mb-4">
              <Link to='/vectorIcons' className='card-link'>
                <CardMain title='Vector Icons'
                  text='4.9 million plus vector icons, colour editor' bgColor='#FFE5EE' />
              </Link>
            </Col>
            <Col md={6} sm={6} lg={3} xs={12} className="mb-4">
              <Link to='/comingsoon' className='card-link'>
                <CardMain title='Lottie Animations'
                  blur="2px"
                  text='/Coming Soon....' bgColor='#EEF8F9' />
                {/* <CommingSoon/> */}
              </Link></Col>
            <Col md={6} sm={6} lg={3} xs={12} className="mb-4">
              <Link to='/comingsoon' className='card-link'>
                <CardMain title='Illustrations' blur="2px"
                  text='Comming Soon....' bgColor='#FCF2F2' />
              </Link></Col>

          </Row>
        </Container>
      </section>

    </>
  )
}

export default HeroSection;
