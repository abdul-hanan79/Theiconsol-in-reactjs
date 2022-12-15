import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ArrowButton from './ArrowButton';
import img from '../../assests/cardeimg.jpg'

function Carde() {
  return (
    <Card className='Carde text-center'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className='mb-4'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ArrowButton color='white'/>
      </Card.Body>
    </Card>
  );
}

export default Carde;