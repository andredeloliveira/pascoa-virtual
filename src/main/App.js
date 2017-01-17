import React, { Component } from 'react'
import './App.css'
import Footer from '../layout/Footer'
import AppMenu from '../layout/AppMenu'
import YoutubeVideo from '../media/YoutubeVideo'
import ImageWithDescription from '../media/ImageWithDescription'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppMenu />
        <YoutubeVideo />
        <ImageWithDescription overlayText="IMERSÃO" id="oquee" />
        <ImageWithDescription overlayText="IMERSÃO" id="comoparticipar" />
        <ImageWithDescription overlayText="IMERSÃO" id="sejaumparceiro" />
        <ImageWithDescription overlayText="IMERSÃO" id="sobrenos" />
        <Footer />
      </div>
    );
  }
}

export default App;
