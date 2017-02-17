import React, { Component } from 'react'
import './App.css'
import Footer from '../layout/Footer'
import AppMenu from '../layout/AppMenu'
import YoutubeVideo from '../media/YoutubeVideo'
import HalfImageWithDescription from '../media/HalfImageWithDescription'
import AppPlayStore from '../media/AppPlayStore'
import About from '../about/About'

class App extends Component {
  render() {
    /*video*/
    const videoTitle = 'Encontre ovos e coelhos virtuais pelo Shopping!';
    const videoDescription = 'A Páscoa Virtual utiliza-se da tecnologia de realidade aumentada, ' +
    'a mesma de PokémonGO!';
    const videoURL = 'https://www.youtube.com/embed/_2rwrEFiP20';
    /**/
    /*App/Playstore*/
    const phonesTitle = 'Download';
    const phonesImageURL = './phones.jpeg';
    /**/
    return (
      <div className="App">
        <AppMenu />
        <YoutubeVideo title={videoTitle} description={videoDescription} videoURL={videoURL} id="oquee"/>
        <HalfImageWithDescription
          title={phonesTitle}
          description={<AppPlayStore />}
          imageURL={phonesImageURL}
          id="comoparticipar"
        />
        <About id="sobrenos" />
        <Footer />
      </div>
    );
  }
}

export default App;
