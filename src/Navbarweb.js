import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbarweb() {
  return (
    <div className='container-fluid nav_bg' >
      <div className='row'>
        <div className='col-10 mx-auto'>
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav  >
            <Nav.Link className='menu_active' href="/">Home</Nav.Link>
            <Nav.Link className='menu_active' href="/about">About Us</Nav.Link>
            <Nav.Link className='menu_active' href="/service">Services</Nav.Link>
            <Nav.Link className='menu_active' href="/contact">Contact US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      </div>
    </div>
  );
}
export default Navbarweb;