import Button from 'react-bootstrap/Button';

function ArrowButton(props) {


    return (
        <>
            <Button className='button' size={props.size}>
                <span className="mx-4">{props.tittle}</span><i class="fa-solid fa-arrow-right "></i>
            </Button>
        </>
    );
}
ArrowButton.defaultProps = {
    color: "#ffff",
    size: "lg",
    tittle: "button",
    bgColor: 'red'
}
export default ArrowButton;
