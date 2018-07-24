import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import NavbarApp from './Components/Navbar';
import Login from './Container/Login';
import './App.css';
import ProductList from './Components/ProductList';

import WelcomeMessage from './Components/WelcomeMessage';

import { connect } from 'react-redux';

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
        <Route path="/Consulta" component={Consulta} />
      </div>
    </Router>
  )
};

const Consulta = () => (
  <Jumbotron>
    <h1>Consulta</h1>
    <ProductList />
  </Jumbotron>
);

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
    logged: state.reducerLogin.logged
  };
};

export default connect(mapStateToProps)(App);
