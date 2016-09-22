import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="footer">
        <p>Designed by Rancel&nbsp; <img src="public/img/soundcloud.png" className="soundcloud"/></p>
      </div>
    )
  }

}

export default Footer
