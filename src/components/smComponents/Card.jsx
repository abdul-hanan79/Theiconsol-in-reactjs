import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
  
          <Card className='carda' style={{backgroundColor: props.bgcolor}}>
            <Card.Body>
              <Card.Title className='cardheading'>{props.title}</Card.Title>
              <Card.Text className='carddescription'>
               {props.text}
              </Card.Text >
            </Card.Body>
            {/* image copied */}
            <Card.Img variant="top" src="https://cdna.iconscout.com/img/attbWsQ9JL8oBpjWD.0763dd4.png?w=624&h=0&f=png" className='cardimg' />
          </Card>
  );
}

export default Cards;