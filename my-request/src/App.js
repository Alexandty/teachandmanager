import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import './App.css';
import NavbarApp from './Components/Navbar';
import Login from './Container/Login';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarApp></NavbarApp>
        <AppRouter />
      </div>
    );
  }
}

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoginView} />
      <Route path="/Consulta" component={Consulta} />
    </div>
  </Router>
);

const Consulta = () => (
  <Jumbotron>
    <h1>Consulta</h1>
    {/* < /> */}
  </Jumbotron>
);

const LoginView = () => (
  <div>
    <Login />
  </div>
);

export default App;
