
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import HeroSearchBtn from './HeroSearchBtn';
import { Link } from 'react-router-dom';

function HeroInputGroup() {
    return (
        <>

            <div className="input-group ">
                <InputGroup className='hero-input-group  bg-white '>
                    <div className="dropdown">
                        <button className=" dropdown-toggle hero-input-group-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className='dropdown-text mr-3'>All Content</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="/3Dillustration">Illustration</Link></li>
                            <li><Link className="dropdown-item" to="/vectorIcon">Vector Icon</Link></li>
                            {/* <li><Link className="dropdown-item" to="/">Something else here</Link></li> */}
                        </ul>
                    </div>

                    <Form.Control aria-label="Text input with 2 dropdown buttons" className='hero-input'
                        placeholder='Browse through 5,663,871 Contents' />
                    <HeroSearchBtn />
                </InputGroup>
            </div>
            <div className='trending d-flex justify-content-center gap-3 mt-3 lh-sm flex-wrap'>
                <span className='trending-title'>Trending:</span>
                <ul className='trending-list mb-0 list-inline d-flex gap-2 text-center flex-wrap justify-content-center'>

                    {/* <li ><Link className='trending-list-item' to='#'>Christmas</Link>,</li>
                    <li ><Link className='trending-list-item' to='#'>Gingerbread</Link>,</li>
                    <li ><Link className='trending-list-item' to='#'>Mistletoe</Link>,</li>
                    <li ><Link className='trending-list-item' to='#'>Business</Link>,</li>
                    <li ><Link className='trending-list-item' to='#'>Celebration</Link>,</li>
                    <li ><Link className='trending-list-item' to='#'>Candy Cane</Link>,</li>
                    <li ><Link className='trending-list-item' to='#'>Payment</Link>,</li>
                    <li ><Link className='trending-list-item' to='#'>Finance</Link>,</li> */}
                    <li >Christmas,</li>
                    <li >Gingerbread,</li>
                    <li >Mistletoe, </li>
                    <li >Business,</li>
                    <li >Celebration,</li>
                    <li >CandyCane,</li>
                    <li >Payment,</li>
                    <li >Finance,</li>
                </ul>
            </div>
        </>
    );
}

export default HeroInputGroup;