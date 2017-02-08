import React from 'react';
import './AppPlayStore.css';

class AppPlayStore extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <a href=""><img src="./apple_store.png" className="appstore" alt="Link para download AppStore"  /></a>
            <a href=""><img src="./play_store.png" className="playstore" alt="Link para download PlayStore"  /> </a>
          </div>
        </div>
      </div>
    )
  }

}

export default AppPlayStore
