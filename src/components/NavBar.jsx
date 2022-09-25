
import { Container , Navbar , NavDropdown, Nav} from 'react-bootstrap';

import React ,{useState, useEffect}from 'react'
import logo from '../assets/calis_logo.png';
import './NavBar.css';

function NavBar() {
  const [activeLink,setActiveLink] = useState("home");
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY >50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }

    }

    window.addEventListener("scroll",onScroll);
    return window.removeEventListener("scroll",onScroll);
  },[]);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
    <Navbar bg="light" expand="lg" className={scrolled?"scrolled":""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src = {logo} alt ="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
             <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink==='skill'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink==='project'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <span className="navbar-text">
              <div className="socila-icon">

              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar