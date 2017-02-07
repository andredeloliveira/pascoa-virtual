import React from 'react'
import '../main/App.css'
import './ImageWithDescription.css';
class ImageWithDescription extends React.Component {
  render() {
    return (
      <div className="transition-container">
        <div className="image-container">
          <span className="overlay-text">{this.props.overlayText}</span>
        </div>
        <div className="description-text" id={this.props.id}>
          Aqui vai alguma explicação sobre como as coisas são comportadas e etc..
        </div>
      </div>
    )
  }
}

export default ImageWithDescription
