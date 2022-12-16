import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import HeroSearchBtn from './HeroSearchBtn';

function HeroInputGroup() {
    return (
        <>


            <InputGroup className='hero-input-group p-2 bg-white'>
                <div className="dropdown">
                    <button className=" dropdown-toggle hero-input-group-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span className='mr-5'> All Contents</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <Form.Control aria-label="Text input with 2 dropdown buttons" className='hero-input'
                placeholder='Browse through 5,663,871 Contents' />
                <HeroSearchBtn />
            </InputGroup>
            {/* <div>
                <span></span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}
        </>
    );
}

export default HeroInputGroup;