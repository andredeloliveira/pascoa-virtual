import React from 'react'
import './App.css'

class YoutubeVideo extends React.Component {

  render() {
    return (
      <div>
        <iframe className="video-container" src="https://www.youtube.com/embed/uCW7qfzYJYk" frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
}

export default YoutubeVideo
