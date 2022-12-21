
import Card from 'react-bootstrap/Card';
import Img from "../assests/recentImage.jpg"

function CardRecent(props) {
  return (
    <Card className='cardf'>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
      <Card.Subtitle className="text-uppercase card-subtitle">{props.subTitle}</Card.Subtitle>
        <Card.Title className='card-title'>{props.title}</Card.Title>
        <Card.Text className=' card-text '>
         {props.text}
        </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default CardRecent;