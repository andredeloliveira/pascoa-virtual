import React from 'react'
import './App.css'

class AppMenu extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top app-header">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img src="./PascoaVirtual.png" alt="logo" className="logo"/>
            </a>
          </div>
          <ul className="nav navbar-nav app-header-link-list">
            <li><a href="#oquee">O QUE É</a></li>
            <li><a href="#comoparticipar">COMO PARTICIPAR</a></li>
            <li><a href="#sejaumparceiro">SEJA UM PARCEIRO</a></li>
            <li><a href="#sobrenos">SOBRE NÓS</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default AppMenu
