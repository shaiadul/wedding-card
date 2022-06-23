import logo from '../../images/Logo.png'
import './Header.css'
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="gray" expand="lg" className='mx-auto nav-font'>
                <Container >
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Brand className='mx-auto' href="#"><img className='mx-auto' src={logo} alt="" /></Navbar.Brand>
                    
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 mx-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Wedding Cards</Nav.Link>
                            <Nav.Link href="#action2">Birthday Cards</Nav.Link>
                            <Nav.Link href="#action3">Feeling Cards</Nav.Link>
                            <Nav.Link href="#action4">Anniversary Cards</Nav.Link>
                            
                            
                        </Nav>
                        <Nav className='ms-auto'>
                        <Nav.Link className='' href="#action1">Login ||</Nav.Link>
                        <Nav.Link className='ps-0' href="#action2">SignUp</Nav.Link>
                        
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;