import Button from 'react-bootstrap/Button';

function Btn(props) {


  return (
    <>
      <Button style={{color:props.color }} size={props.size}>{props.tittle}</Button>
    </>
  );
}
 Btn.defaultProps ={
    color:"#F58648" ,
    size:"sm",
    tittle:"button"
 }
export default Btn;
