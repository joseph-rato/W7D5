import React from 'react';
import {withRouter, Link} from 'react-router-dom';


class sessionForm extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  onSubmit(event){
    event.preventDefault();
    const user = Object.assign({}, this.state)
    return processForm(user)
  }

  changeInput(type){
    return (e) => {
      this.setstate({[type]: e.target.value})
    }
  }

  render(){
    let title = '';
    let nav = '';
    let otherTitle = '';
    if (this.props.formType === 'signup') {
       title = 'Sign Up'
       nav = 'login'
       otherTitle = 'Log In'
    } else {
       title = 'Log in'
       nav ='signin'
       otherTitle = 'Sign Up'
    }
    return(
      <div>
        <h2>{title}</h2>
        <ul>
          {
            this.props.errors.map( (el) => {
              return (<li>{el}</li>);
            })
          }
        </ul>
        <form onSubmit={this.onSubmit}>
          <label> Username:
            <input ref="username" type="text" onChange={this.changeInput('username')}></input>
          </label>
          <label> Password:
            <input ref="password" type="password" onChange={this.changeInput('password')}></input>
          </label>
          <input type="submit" />
        </form>
        <Link to={`/${nav}`}>{otherTitle}</Link>
      </div>
    )
  }
}

export default withRouter(sessionForm);
