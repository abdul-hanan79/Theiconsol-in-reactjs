import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import CardAddMagic from '../../components/CardAddMagic'
import cardImg1 from '../../assests/addmagicardpic1.png'
import cardImg2 from '../../assests/addmagicardpic2.png'
import cardImg3 from '../../assests/addmagicardpic3.png'

export default function AddMagic() {
  return (
    <>

      <div className='mt-5 add-magic-bg'>
        <div class="add-magic-bg-img"></div>
      </div>
      <Container className='add-magic text-center mx-auto '>
        <h1 className='add-magic-heading '>In 30 seconds, magically transform <br /> your design.    </h1>
        <p className='add-magic-text mb-4'>Theiconsol comes with integrated Plugins, conversion Tools, and simple, powerful Editors <br /> that enhance and streamline your workflow.</p>

        <Container className='add-magic-cards'>
          <Row className='justify-content-center'>
            <Col lg={4} md={6} sm={12}><CardAddMagic title="The most essential Resources" text="Choose the most relevant assets from all the various styles available to compliment your design." image={cardImg1} /></Col>
            <Col lg={4} md={6} sm={12}><CardAddMagic title="Choose and make changes" text="To swiftly adjust colours, backgrounds, apply presets, and make quick modifications on the go, use our SVG and Lottie Editors." image={cardImg2} /></Col>
            <Col lg={4} md={6} sm={12}><CardAddMagic title="Cross-platform implementation" text="In only a few clicks, add SVGs and Lottie Animations. On the Web, iOS, Android, TV, and WatchOS, they function like magic." image={cardImg3} /></Col>
          </Row>
        </Container>
      </Container>

    </>
  )
}
