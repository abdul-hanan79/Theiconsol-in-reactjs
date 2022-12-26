import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form';





function MainNavbar(props) {
  return (

    <Navbar expand="lg" className="navbar-div" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className='ms-5'>
          <Link to='/'  className='nav-brand'>Theiconsol</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >

          <Nav
            // className="me-auto  nav-body bg-dark my-2 my-lg-0"
            className="nav-link-container w-100  justify-content-between" navbarScroll>

            <div className='d-flex w-75 align-items-center  justify-content-center'>
              <Nav.Link   >
                <Link to='/3dillustration' className='nav-link'>3D Illustration</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to='/vectoricon' className='nav-link'>Vector Icon</Link>
              </Nav.Link>
            </div>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              />
            </Form> */}
            <div className="user">
              <Button className='login nav-btn'><Link to='/login' className='nav-btn-link login-link'>Login</Link></Button>
              <Button className='signup nav-btn'><Link to='/signup' className='nav-btn-link signup-link' >Signup</Link></Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNavbar;
