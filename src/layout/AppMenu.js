import React from 'react'
import './AppMenu.css'

class AppMenu extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default app-header">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img src="./PascoaVirtual.png" alt="logo" className="logo"/>
            </a>
          </div>
          <ul className="nav navbar-nav app-header-link-list">
            <li><a href="#oquee">O QUE É</a></li>
            <li><a href="#comoparticipar">COMO PARTICIPAR</a></li>
            <li><a href="#sobrenos">SEJA UM PARCEIRO</a></li>
            <li><a href="#sobrenos">SOBRE NÓS</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default AppMenu
