import React from 'react';
import './AppPlayStore.css';
import Countdown from '../CountDown';

class AppPlayStore extends React.Component {

  _renderCountdown() {
    const messages = {
      days: { plural: ' dias', singular: ' dia'},
      hours: ' horas',
      mins: ' mins',
      segs: ' segs'
    }
    const finalDate = new Date('2017-03-01T18:20:00.600Z');
    if (new Date() > finalDate) {
      return (
        <div>
          <a href=""><img src="./apple_store.png" className="appstore" alt="Link para download AppStore"  /></a>
          <a href=""><img src="./play_store.png" className="playstore" alt="Link para download PlayStore"  /> </a>
        </div>
      )
    } else {
      return <Countdown date={finalDate} {...messages} onEnd={() => {}}/>
    }
  }
  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="app-description-container">
              Aguarde o lançamento da <strong>Páscoa Virtual</strong> para viver essa nova aventura de Páscoa
              <div className="countdown">
                <div>Disponível em apenas: </div>
                {this._renderCountdown()}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default AppPlayStore
