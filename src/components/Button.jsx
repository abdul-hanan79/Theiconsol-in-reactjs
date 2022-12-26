import Button from 'react-bootstrap/Button';

function Btn(props) {


  return (
    <>
      <Button className='button '>{props.title}</Button>
    </>
  );
}
 
export default Btn;
