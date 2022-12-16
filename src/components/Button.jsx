import Button from 'react-bootstrap/Button';

function Btn(props) {


  return (
    <>
      <Button className='button' >{props.tittle}</Button>
    </>
  );
}
 
export default Btn;
