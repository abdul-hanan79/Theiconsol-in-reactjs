import Card from 'react-bootstrap/Card';


function Cardc(props) {
  return (
  
          <Card className='cardc' style={{backgroundColor: props.bgcolor}}>
            <Card.Img variant="top" 
            src={props.image} className='cardimg' />
            <Card.Body>
              <Card.Title className='cardheading'>{props.title}</Card.Title>
              <Card.Text  className='carddescription'>
               {props.text}
              </Card.Text>
            </Card.Body>
            {/* image copied */}
          </Card>
  );
}

export default Cardc;