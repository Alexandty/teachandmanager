import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import './App.css';
import NavbarApp from './Components/Navbar';
import Login from './Container/Login';
import ProductList from './Components/ProductList';

class App extends Component {
  render() {
    return (
        <div className="App">
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
    <ProductList />
  </Jumbotron>
);

const LoginView = () => (
  <div className="Container">
    <h1>Login</h1>
    <Login />
  </div>
);

export default App;
