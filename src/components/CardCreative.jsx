import Card from 'react-bootstrap/Card';


function CardCreative(props) {
  return (
  
          <Card className='card-creative' style={{backgroundColor: props.bgcolor}}>
            <Card.Img variant="top" 
            src={props.image} className='card-img' />
            <Card.Body>
              <Card.Title className='card-heading'>{props.title}</Card.Title>
              <Card.Text  className='card-description'>
               {props.text}
              </Card.Text>
            </Card.Body>
            {/* image copied */}
          </Card>
  );
}

export default CardCreative;