import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';

const NavbarApp = ({ lider, user, name, lastName }) => (

    <Navbar inverse collapseOnSelect>
        {console.log(user)}
        <Navbar.Header>
            <Navbar.Brand>
                <a className="navbar-brand">Tech and Manager</a>
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
            <Nav pullRight className="user-nav">
                <a>{name}{" "}{lastName}</a>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const mapStateToProps = (state) => {
    return {
        ...state.login.user
    };
};

export default connect(mapStateToProps)(NavbarApp);