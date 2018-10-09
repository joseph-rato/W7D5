import React from 'react';
import GreetingContainer from './greeting';
import {Route} from 'react-router-dom';
import SignupFormContainer from './logging_in/signup_form_container'
import LoginFormContainer from './logging_in/login_form_container'

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>
      <h1>mother finnaly</h1>
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </div>
  )
}

export default App;
