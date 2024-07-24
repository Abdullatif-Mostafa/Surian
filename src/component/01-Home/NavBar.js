import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className='Navbar' expand="lg" style={{position:"fixed"}}>
      <Container>
        <Navbar.Brand href="#home">
                <img src='logo.png' alt=''></img>
        </Navbar.Brand>  
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/menu">Explore Foods</Link>
            <Link className='nav-link' to="/review">Review</Link>
            <Link className='nav-link' to="/about">About Us</Link>
            <Link className='nav-link' to="/FAQ">FAQ</Link>
            <Link className='nav-link' to="/">01213435465</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;