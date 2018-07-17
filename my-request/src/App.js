import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Banner from './Components/Banner';


class App extends Component {
  render() {
    return (
      <div className="App">

        <AppRouter />

      </div>
    );
  }
}

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/Consulta" component={Consulta} />
  </Switch>
);

const Consulta = () => (
  <Jumbotron>
    <h1>Consulta</h1>
    {/* < /> */}
  </Jumbotron>
);

const Login = () => (
  <Jumbotron>
    <h1>Login</h1>
    {/* < /> */}
  </Jumbotron>
);

export default App;
