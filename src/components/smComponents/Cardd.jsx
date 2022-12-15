import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cardd(props) {
    return (




        <div className='card-div'>
            <Card className='cardd d-flex align-items-center justify-content-center ' >
                <Card.Img src={props.image} height='44' width='44' />
                <Card.Body className='card-body'>
                    <Card.Title className='h6 card-title'>{props.title}</Card.Title>
                </Card.Body>
            </Card>

        </div>


    );
}

export default Cardd;