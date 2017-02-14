import React from 'react';
import './HalfImageWithDescription.css';

class HalfImageWithDescription extends React.Component {

  render() {
    return (
      <div className="row" id={this.props.id}>
        <div className="col-md-6">
          <img src={this.props.imageURL} alt="Android e iPhone" className="phones"/>
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

export default HalfImageWithDescription;
