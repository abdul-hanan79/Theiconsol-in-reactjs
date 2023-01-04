import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function MainNavbar(props) {

    const [show, setShow] = useState(true)
    return (


        <nav className="navbar navbar-expand-lg d-block p-3 " sticky="top">
            <div className="container ">
                <Link to='/' className='nav-brand  '>Theiconsol</Link>
                <button className="navbar-toggler "
                    onClick={() => { setShow(!show) }} >

                    {show ?<i class="fa-sharp fa-solid fa-bars-staggered"></i> :
                        <i className="fa fa-times" aria-hidden="true"></i>}
                </button>
                <div className={` nav-link-container w-100 d-flex justify-content-center align-items-center ${show ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}`}>
                    <ul className="d-flex gap-3 w-75 align-items-center  justify-content-center navbar-nav ">
                        <li className="nav-item ">
                            <Link to='/3dillustration' className='navbar-link'>3D Illustration</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/vectoricon' className='navbar-link'>Vector Icon</Link>
                        </li>
                    </ul>
                    <div className="user d-flex">
                        <Button className='login nav-btn'><Link to='/login' className='nav-btn-link login-link'>Login</Link></Button>
                        <Button className='signup nav-btn'><Link to='/signup' className='nav-btn-link signup-link' >Signup</Link></Button>
                    </div>
                </div>

            </div>
        </nav>

        // <Navbar expand="lg" className="navbar-div" sticky="top">
        //   <Container fluid>
        //     <Navbar.Brand href="#" className='ms-5'>
        //       <Link to='/'  className='nav-brand'>Theiconsol</Link>
        //       </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="navbarScroll" className='nav-toggler'  onClick={shoot} />
        //     <Navbar.Collapse id="navbarScroll" className='navbar-collapse' >

        //       <Nav
        //         // className="me-auto  nav-body bg-dark my-2 my-lg-0"
        //         className="nav-link-container w-100  justify-content-between" navbarScroll>

        //         <div className='d-flex w-75 align-items-center  justify-content-center'>
        //           <Nav.Link   >
        //             <Link to='/3dillustration' className='navbar-link'>3D Illustration</Link>
        //           </Nav.Link>
        //           <Nav.Link >
        //             <Link to='/vectoricon' className='navbar-link'>Vector Icon</Link>
        //           </Nav.Link>
        //         </div>

        //         <div className="user">
        //           <Button className='login nav-btn'><Link to='/login' className='nav-btn-link login-link'>Login</Link></Button>
        //           <Button className='signup nav-btn'><Link to='/signup' className='nav-btn-link signup-link' >Signup</Link></Button>
        //         </div>
        //       </Nav>
        //     </Navbar.Collapse>
        //   </Container>
        // </Navbar>
    );
}
export default MainNavbar;
