import React from 'react'
import './Footer.css'

class Footer extends React.Component {

  render() {
    return(
      <footer className="footer">
        <div className="ais">  <a href="http://ambientesvirtuais.com"><img className="ais-logo" src="./ais-logo.png" alt="AIS - Ambientes Virtuais" /><span> © Ambientes Virtuais - 2017</span> </a> </div>
      </footer>
    )
  }
}

export default Footer
