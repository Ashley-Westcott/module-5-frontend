import React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPage extends React.Component {
  render(){
    console.log("loginpage", this.props)
    return (
      <div>
        <LoginForm setCurrentTraveler={this.props.setCurrentTraveler} history={this.props.history} />
      </div>
    )
  }
}
