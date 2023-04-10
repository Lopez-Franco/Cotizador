import React from "react";
import Navbar from 'react-bootstrap/Navbar';
function Header() {

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '2rem', color: "rgb(0,122,179)", fontWeight: "bold"}}>Seguros del Hogar</Navbar.Brand>
    </Navbar>

  )
}

export default Header;
