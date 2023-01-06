import Card from 'react-bootstrap/Card';


function CardMain(props) {
  return (

    <>
      <Card className='card-main ' style={{ backgroundColor: props.bgColor, filter: `blur(${props.blur})` }}>
        <Card.Body className='card-main-body'>
          <Card.Title className='hero-card-heading'>{props.title}</Card.Title>
          <Card.Text className='hero-card-description'>
            {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={props.imgSrc} className='card-main-img' />
        {/* https://cdna.iconscout.com/img/attbWsQ9JL8oBpjWD.0763dd4.png?w=624&h=0&f=png */}
      </Card>
    </>
  )

}

CardMain.defaultProps = {
  bgColor: "red",
  blur: "0px",
  title: "write here title",
  text: "write here description"

}
export default CardMain;
