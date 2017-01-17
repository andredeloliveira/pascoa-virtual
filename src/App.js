import React, { Component } from 'react'
import './App.css'
import pascoaV from './pascoa-virtual.svg'
import Home from './Home'
import Footer from './Footer'
import ClientsBar from './ClientsBar'
import AppMenu from './AppMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppMenu />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
