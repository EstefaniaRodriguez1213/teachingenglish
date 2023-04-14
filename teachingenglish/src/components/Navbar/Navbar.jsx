import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  return (
       <Navbar className="nav">
        <Container>    
          <Link style={{ paddingBottom: '10px'}} to="/home"><img className='logo' src="img/logo.png"></img></Link>
          {/* <Link style={{ color: '#FFFF',textDecoration: 'none', paddingTop: '10px'  }} to="/clases"><p><strong>CLASES PARTICULARES</strong></p></Link>
          <Link style={{ color: '#FFFF',textDecoration: 'none' , paddingTop: '10px' }} to="/about"><p><strong>CURSOS</strong></p></Link>
          <Link style={{ color: '#FFFF',textDecoration: 'none' , paddingTop: '10px' }} to="/contact"><p><strong>CONTACTO</strong></p></Link> */}
        </Container>
      </Navbar>
  )
}

export default NavBar;
