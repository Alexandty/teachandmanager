import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../index.css'

const NavbarApp = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <img src="http://www.techandsolve.com/wp-content/themes/techandsolve/images/logo-tech-and-solve-footer.png" width="201" height="110" alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">
                    Link
      </NavItem>
                <NavItem eventKey={2} href="#">
                    Link
      </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Link Right
      </NavItem>
                <NavItem eventKey={2} href="#">
                    Link Right
      </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavbarApp;