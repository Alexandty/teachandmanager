import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import NavbarApp from './Components/Navbar';
import Login from './Container/Login';
import './App.css';
import RequestVacationList from './Container/VacationsRequestList';
import Solicitud from './Container/SolicitudVacaciones/';
import RequestVacationLider from './Container/RequestVacationLider';
import WelcomeMessage from './Components/WelcomeMessage';

const App = ({ logged }) => {
  if (logged) {
    return (
      <div className="App">
        <AppRouter user><NavbarApp /></AppRouter>
      </div>
    );
  } else {
    return (
      <LoginView />
    )
  }
}

const AppRouter = (props) => {
  return (
    <Router>
      <div>
        {props.children}
        <Route exact path="/" component={Welcome} />
        <Route path="/consulta" component={Consulta} />
        <Route path="/solicitud" component={SolicitudApp} />
        <Route path="/solicitudeslider" component={SolicitudesLider} />
      </div>
    </Router>
  )
};

const Consulta = () => (
  <Jumbotron>
    <h2>Consulta</h2>
    <RequestVacationList />
  </Jumbotron>
);
const SolicitudApp = () => (
  <Jumbotron>
    <h2>Solicitud</h2>
    <Solicitud />
  </Jumbotron>

);

const SolicitudesLider = () => (
  <Jumbotron>
    <RequestVacationLider />
  </Jumbotron>
)

const Welcome = () => (
  <div>
    <WelcomeMessage />
  </div>
)


const LoginView = () => (
  <div>
    <Login />
  </div>
);

const mapStateToProps = state => {
  return {
    logged: state.login.logged
  };
};

export default connect(mapStateToProps)(App);
