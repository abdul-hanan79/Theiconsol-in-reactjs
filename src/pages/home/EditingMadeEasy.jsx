import React from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import CardEditing from "../../components/CardEditing"
export default function EditingMadeEasy() {
  return (
    <>
     <h1 className='add-magic-heading text-center pt-3'><span className='editing-span position-relative'>Editing </span>made easy </h1>
       <Container>
        <Row className='pt-2 pb-5 mt-5 '>
            <Col lg={4} md={6} sm={12} className="mb-4"><CardEditing title="Color Editor" text="SVG icons and illustrations can have their colours, strokes, and shapes changed."
            btntitle='Open Color Editor'/></Col>
            <Col lg={4} md={6} sm={12} className="mb-4"><CardEditing title="SVG to Lottie" text="
            Do your SVG icons and graphics need to be animated? Simply convert your SVG icons or images to Lottie animations using this little tool." btntitle="Open SVG to loottie"/></Col>
            <Col lg={4} md={6} sm={12} className="mb-4"><CardEditing title="Lottie Editor" text="You may modify, adjust, and customise your Lottie with our online editor. Changes on the fly have never been this simple and enjoyable."  btntitle='open lottir editor'/></Col>
        </Row>
       </Container>

    </>
  )
}
