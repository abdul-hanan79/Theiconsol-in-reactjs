import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardCreative(props) {
  return (
    <>
      <Link className='card-link' to={props.link}>
        <Card className='card-creative' style={{ backgroundColor: props.bgcolor }}>
          <Card.Img variant="top"
            src={props.image} className='card-img' />
          <Card.Body>
            <Card.Title className='card-heading'>{props.title}</Card.Title>
            <Card.Text className='card-description'>
              {props.text}
            </Card.Text>
          </Card.Body>
          {/* image copied */}
        </Card>
      </Link>
    </>
  );
}

export default CardCreative;