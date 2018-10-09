import React from 'react';
import {Link} from 'react-router-dom'

class Greeting extends React.Component {


  render() {
    let {currentUser, logout} = this.props;
    if (!currentUser) {
      return(
      <div>
        <p>hello</p>
        <Link to='/login' >Login</ Link>
          <br></br>
        <Link to='/signup' >Signup</ Link>
      </div>
      )
    } else {
      return(
        <div>
          <p> nope</p>
          <button onClick={this.logout.bind(this)} value="Logout" />
        </div>
      )
    }
  }
}

export default Greeting;
