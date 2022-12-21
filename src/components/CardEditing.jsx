// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ArrowButton from './ArrowButton';
import image from "../assests/cardeimg.jpg";

function CardEditing(props) {
  return (
    <Card className='Card-editing text-center'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='fw-bold'>{props.title}</Card.Title>
        <Card.Text className='card-editing-text mb-4'>
          {props.text}
        </Card.Text>
        <ArrowButton color='white' btntitle={props.btntitle} />
      </Card.Body>
    </Card>
  );
}

export default CardEditing;