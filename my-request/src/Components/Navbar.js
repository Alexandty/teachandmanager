import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css'

const NavbarApp = ({ lider }) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <img src="http://www.techandsolve.com/wp-content/themes/techandsolve/images/logo-tech-and-solve-footer.png" width="100" height="80" alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1}>
                    <Link to="/">Inicio</Link>
                </NavItem>
                <NavDropdown eventKey={3} title="Vacaciones" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}><Link to={"/consulta"}>Consulta de Solicitudes</Link></MenuItem>
                    <MenuItem eventKey={3.2}><Link to={"/solicitud"}>Solicitud Vacaciones</Link></MenuItem>
                    {lider ? <MenuItem eventKey={3.3}><Link to={"/solicitudeslider"}>Mis Solicitudes</Link></MenuItem> : <div />}
                </NavDropdown>
            </Nav>
            <Nav pullRight>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

const mapStateToProps = (state) => {
    return {
        ...state.login.user
    };
};

export default connect(mapStateToProps)(NavbarApp);