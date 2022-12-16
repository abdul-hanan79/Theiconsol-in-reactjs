import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ArrowButton from './ArrowButton';
import img from '../../assests/cardeimg.jpg'

function CardEditing(props) {
  return (
    <Card className='Carde text-center'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='mb-4'>
          {props.text}
        </Card.Text>
        <ArrowButton color='white' />
      </Card.Body>
    </Card>
  );
}

export default CardEditing;