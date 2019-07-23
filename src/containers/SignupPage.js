import React from 'react'
import SignupForm from '../components/SignupForm'

export default class SignupPage extends React.Component {
  render(){
    console.log('signuppage props', this.props)
    return (
      <div>
      <SignupForm setCurrentTraveler={this.props.setCurrentTraveler} history={this.props.history} />
      </div>
    )
  }
}
