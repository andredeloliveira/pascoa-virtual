import React from 'react'
import './Vantagens.css'

class VantagensC extends React.Component {


  render () {
    return (
      <div className="row vantagens-text">
        <div className="col-sm-3 col-md-3">
          <i className="fa fa-clock-o icon"></i>
          Aumentar o tempo de permanência dos consumidores
        </div>
        <div className="col-sm-3 col-md-3">
          <i className="fa fa-random icon"></i>
          Induzir fluxos de pessoas por corredores
        </div>
        <div className="col-sm-3 col-md-3">
          <i className="fa fa-child icon"></i>
          Infantilizar o passeio dos visitantes no shopping
        </div>
        <div className="col-sm-3 col-md-3">
          <i className="fa fa-microchip icon"></i>
          Diferencial competitivo tecnológico para as lojas na época da Páscoa
        </div>
      </div>
    )
  }
}

export default VantagensC
