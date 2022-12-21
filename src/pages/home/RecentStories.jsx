import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap'
import CardRecent from '../../components/CardRecent'


export default function RecentStories() {
  return (
    <>
     <Container>
        <Row className='d-flex justify-content-between'>
                <Col><h1>Recent Stories</h1> </Col>
                <Col ><button type="button" class="btn btn-outline-secondary float-end">View all</button></Col>
        </Row>
        <Row> 
            <Col lg={4} md={6} sm={12}><CardRecent subTitle="RESOURCES" title="The Top 10 Icon Design Courses" text="by jasmine Andria"/></Col>
            <Col lg={4} md={6} sm={12}><CardRecent subTitle="ICONSCOT ASSSETS" title="High-quality Christmas icons, illustrations, animations, and 3D images!" text="by Iconscot"/></Col>
            <Col lg={4} md={6} sm={12}><CardRecent subTitle="BEST ILLUSTRATION" title="The Top 10 Illustration Education Courses" text="by jasmine Andria"/></Col>
        </Row>
     </Container>

    </>
  )
}
