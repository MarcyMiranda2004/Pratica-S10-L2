import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../assets/logo_icon.png'
import '../index.css'

const MyNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="logo" className='w-25'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-white bg-white'/>

        <Navbar.Collapse id="responsive-navbar-nav" className='text-white'>
          <Nav className="me-auto">

            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>

            <NavDropdown title="Function" id="collapsible-nav-dropdown" className='text-white'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='text-white'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-white'>
              Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
