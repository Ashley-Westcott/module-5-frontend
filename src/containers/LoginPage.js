import React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPage extends React.Component {
  render(){
    return (
      <div>
        <LoginForm handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} />
      </div>
    )
  }
}
