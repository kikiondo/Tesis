import React, { Component } from 'react'
// import { auth } from '../../../helpers/Auth'
import './login-register.css'
import { Button, FormControl, InputGroup  } from 'react-bootstrap'

export default class Register extends Component {
  constructor(...props) {
    super(...props)

    this.state = { loginMessage: null }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.setMessage = this.setMessage.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    // auth( this.email.value, this.password.value )
    //   .catch( err => this.setState( this.setMessage( `Error: ${err.message}` ) ) )
  }

  setMessage(err) {
    return { loginMessage: err }
  }

	render() {
		return (
			<article className="Main-container">
		    <h1>Registro de Usuarios</h1>
        <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
          <InputGroup>
            <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl  type="email" placeholder="Email" ref={ email => this.email = email }  />
            </InputGroup>
          <FormControl  type="password" placeholder="Password" ref={ password => this.password = password } />
          {
            this.state.loginMessage &&
            <div className="u-error">
              <p>
                Error:&nbsp;&nbsp;{this.state.loginMessage}
              </p>
            </div>
          }
          <Button type="submit">Registrar</Button>
        </form>
			</article>
		)
	}
}