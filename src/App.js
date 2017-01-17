import React, { Component } from 'react'
import './App.css'
import pascoaV from './pascoa-virtual.svg'
import Home from './Home'
import Footer from './Footer'
import ClientsBar from './ClientsBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="./PascoaVirtual.png" className="logo" alt="logo" />
        </div>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
