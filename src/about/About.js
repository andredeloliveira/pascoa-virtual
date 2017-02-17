import React from 'react'
import './About.css'
import '../main/App.css'
import VantagensC from '../functionalities/Vantagens'


class About extends React.Component {

  render() {
    return (
      <div className="container-fluid" id={this.props.id}>
        <div className="row">
          <div className="col-md-6">
            <h1 className="about-title">Utilize a Páscoa Virtual em seu estabelecimento</h1>
            <p className="about-text">
              Não fique de fora da nova maneira de fazer a clássica caçada de ovos de Páscoa.
              A Páscoa Virtual é uma ação de Marketing Tecnológica para Shoppings e lojas de chocolate
            </p>
            <h3 className="send-email-text">Baixe mais informações</h3>
            <a href="./folder.pdf" target="_blank" className="btn btn-default pascoa-button">Baixar agora</a>
          </div>
          <div className="col-md-6 vantagens">
              <h1 className="send-email-text">Vantagens</h1>
              <VantagensC />
              <h3 className="send-email-text">Inscreva-se para garantir 10% de desconto</h3>
              <a href="http://ambientesvirtuais.us14.list-manage.com/subscribe?u=409e3414e10c232807cc5cf03&id=c63b152e91" target="_blank" className="btn btn-default pascoa-button">Inscrever-se</a>

          </div>
        </div>
      </div>
    )
  }
}

export default About
