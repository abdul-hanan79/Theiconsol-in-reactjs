import Button from 'react-bootstrap/Button';

function ArrowButton(props) {


    return (
        <>
            <Button className='button creative-resources-button' size={props.size}>
                <span className="mx-4 arrow-button-title">{props.title}</span><i className="fa-solid fa-arrow-right "></i>
            </Button>
        </>
    );
}
ArrowButton.defaultProps = {
    color: "#ffff",
    size: "md",
    tittle: "button",
    bgColor: 'red'
}
export default ArrowButton;
