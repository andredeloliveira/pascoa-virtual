import React from 'react'
import '../main/App.css'
import './YoutubeVideo.css'

class YoutubeVideo extends React.Component {

  render() {
    return (
      <div className="row video-text-container" id={this.props.id}>
        <div className="col-md-6">
        <h1 className="side-text-title">{this.props.title}</h1>
        <div className="side-text-container">
          {this.props.description}
        </div>
          <a className="btn btn-default pascoa-button" href="#comoparticipar">Baixe agora</a>
          <a className="btn btn-default pascoa-button" href="#sobrenos"> Seja um parceiro</a>
        </div>
        <div className="col-md-6">
          <iframe className="video-container" src={this.props.videoURL} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

export default YoutubeVideo
