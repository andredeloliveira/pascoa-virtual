import React, { Component } from 'react'
import './App.css'
import Footer from '../layout/Footer'
import AppMenu from '../layout/AppMenu'
import YoutubeVideo from '../media/YoutubeVideo'
import MapAndDescription from '../media/MapAndDescription'
import ImageWithDescription from '../media/ImageWithDescription'

import About from '../about/About'

class App extends Component {
  render() {
    const videoTitle = 'Encontre ovos e coelhos virtuais pelo Shopping!';
    const videoDescription = 'A Páscoa Virtual utiliza-se da tecnologia de realidade aumentada, ' +
    'a mesma de PokemonGO!';
    const videoURL = 'https://www.youtube.com/embed/uCW7qfzYJYk';
    const mapAndDescriptionTitle = 'TITULO DO MAPA';
    const mapAndDescriptionDescription = 'DESCRICAO DO MAPA';
    return (
      <div className="App">
        <AppMenu />
        <YoutubeVideo title={videoTitle} description={videoDescription} videoURL={videoURL} />
        <ImageWithDescription id="transicao" overlayText="Páscoa Virtual"/>
        <About id="sobrenos" />
        <Footer />
      </div>
    );
  }
}

export default App;
