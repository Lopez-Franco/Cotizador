import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles/navLinks.css'
function NavLinks({children}){
    return(
        <div className="container-navbar">
        <Navbar variant="light">
          <Nav className="ml-auto">
            <div className="div-link">{children}</div>
          </Nav>
        </Navbar>
        <div className="nav-line"></div>
      </div>
    )
}
export default NavLinks