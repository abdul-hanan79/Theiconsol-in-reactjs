import Card from 'react-bootstrap/Card';


function CardAddMagic(props) {
  return (
  
          <Card className='card-add-magic'>
            <Card.Img variant="top" 
            src={props.image} className='card-img img-fluid mx-auto d-block'  />
            <Card.Body>
              <Card.Title className='card-heading'>{props.title}</Card.Title>
              <Card.Text className='card-description' >
               {props.text}
              </Card.Text>
            </Card.Body>
            {/* image copied */}
          </Card>
  );
}

export default CardAddMagic;