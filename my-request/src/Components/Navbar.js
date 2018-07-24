import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../index.css'

const NavbarApp = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <img src="http://www.techandsolve.com/wp-content/themes/techandsolve/images/logo-tech-and-solve-footer.png" width="100" height="80" alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} componentClass='span'>
                <Link to="/">Inicio</Link>
      </NavItem>
                <NavDropdown eventKey={3} title="Vacaciones" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} componentClass='span'><Link to={"/Consulta"}>Consulta de solicitudes</Link></MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavbarApp;