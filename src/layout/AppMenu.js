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
            <li><a href="#oquee">o que é</a></li>
            <li><a href="#comoparticipar">como participar</a></li>
            <li><a href="#sobrenos">seja um parceiro</a></li>
            <li><a href="http://www.ambientesvirtuais.com" target="_blank">sobre nós</a></li>
          </ul>
        </div>
        <div className="chocolate">
        </div>
      </nav>
    )
  }
}

export default AppMenu
