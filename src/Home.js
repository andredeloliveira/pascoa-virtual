import React from 'react'
import './App.css'
import YoutubeVideo from './YoutubeVideo'
import ImageWithDescription from './ImageWithDescription'

class Home extends React.Component {

  render() {
    return (
      <div>
        <ImageWithDescription overlayText="IMERSÃO"/>
        <ImageWithDescription overlayText="IMERSÃO"/>
        <ImageWithDescription overlayText="IMERSÃO"/>
        <YoutubeVideo />
      </div>
    )
  }
}

export default Home
