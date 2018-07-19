import React, { Component } from 'react';
import './App.css';
import ProductList from './Components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList />
      </div>
    );
  }
}

export default App;
