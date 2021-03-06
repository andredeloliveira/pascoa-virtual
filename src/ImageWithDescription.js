import React from 'react'
import './App.css'

class ImageWithDescription extends React.Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <span className="overlay-text">{this.props.overlayText}</span>
        </div>
        <div className="description-text">
          Aqui vai alguma explicação sobre como as coisas são comportadas e etc..
        </div>
      </div>
    )
  }
}

export default ImageWithDescription
