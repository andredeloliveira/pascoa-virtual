import React from 'react';
import '../main/App.css';
import './MapAndDescription.css';

class MapAndDescription extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          MAPA VAI AQUI
        </div>
        <div className="col-md-6">
          <h1 className="side-text-title">{this.props.title}</h1>
          <div className="side-text-container">
            {this.props.description}
          </div>
        </div>
      </div>
    )
  }
}

export default MapAndDescription
