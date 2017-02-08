import React from 'react'
import './About.css'
import '../main/App.css'
import VantagensC from '../functionalities/Vantagens'
class About extends React.Component {

  registerEmail(event) {
    event.preventDefault()
    const customerEmail = event.target.email.value;
  }

  render() {
    return (
      <div id={this.props.id} className="container-fluid" id={this.props.id}>
        <div className="row">
          <div className="col-md-6">
            <h1 className="about-title">Utilize a Páscoa Virtual em seu estabelecimento</h1>
            <p className="about-text">
              Não fique de fora da nova maneira de fazer a clássica caçada de ovos de Páscoa.
              A Páscoa Virtual é uma ação de Marketing Tecnológica para Shoppings e lojas de chocolate
            </p>
          </div>
          <div className="col-md-6 vantagens">
              <h1 className="send-email-text">Vantagens</h1>
              <VantagensC />
              <h3 className="send-email-text">Baixe mais informações</h3>
              <form onSubmit={this.registerEmail.bind(this)}>
                <input type="text" className="send-email-input" name="email" placeholder="Insira seu e-mail"/>
                <input type="submit" value="Baixar" className="btn btn-default pascoa-button" />
              </form>

          </div>
        </div>
      </div>
    )
  }
}

export default About
