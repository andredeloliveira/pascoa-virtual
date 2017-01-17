import React from 'react'
import './App.css'
import YoutubeVideo from './YoutubeVideo'
import ImageWithDescription from './ImageWithDescription'

class Home extends React.Component {

  render() {
    return (
      <div>
        <YoutubeVideo />
        <ImageWithDescription overlayText="IMERSÃO" id="oquee" />
        <ImageWithDescription overlayText="IMERSÃO" id="comoparticipar" />
        <ImageWithDescription overlayText="IMERSÃO" id="sejaumparceiro" />
        <ImageWithDescription overlayText="IMERSÃO" id="sobrenos" />
      </div>
    )
  }
}

export default Home
