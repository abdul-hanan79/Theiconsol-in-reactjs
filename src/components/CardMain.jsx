import Card from 'react-bootstrap/Card';


function CardMain(props) {
  return (

<>
    <Card className='card-main' style={{backgroundColor: props.bgColor}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src="https://cdna.iconscout.com/img/attbWsQ9JL8oBpjWD.0763dd4.png?w=624&h=0&f=png" className='card-main-img' />
    </Card>
    </>
  )
}
export default CardMain;
