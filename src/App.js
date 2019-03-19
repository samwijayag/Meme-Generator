import React, { Component } from 'react';
import Header from './Components/Header'
import Memegenerator from './Components/Memegenerator'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Memegenerator />
      </div>
    );
  }
}

export default App;
